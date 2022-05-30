import com.microsoft.aad.msal4j.*;
import com.microsoft.graph.logger.DefaultLogger;
import com.microsoft.graph.logger.LoggerLevel;
import com.microsoft.graph.requests.extensions.GraphServiceClient;
import com.microsoft.graph.models.extensions.*;
import com.microsoft.graph.models.generated.BodyType;
import com.microsoft.graph.models.generated.AttendeeType;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.util.List;
import java.util.concurrent.CompletableFuture;

class ClientCredentialGrant {

    private static String authority;
    private static String clientId;
    private static String secret;
    private static String scope;

    public static void main(String[] args) throws Exception {
        setUpSampleData();

        try {
            IAuthenticationResult result = getAccessTokenByClientCredentialGrant();
            String usersListFromGraph = getUsersListFromGraph(result.accessToken());

            System.out.println("Users in the Tenant = " + usersListFromGraph);

            String jsonString = "{\n" +
                    "                \"subject\": \"Meeting\",\n" +
                    "                \"content\": \"Some meeting\",\n" +
                    "                \"date_from\": \"2020-09-30 10:00\",\n" +
                    "                \"date_to\": \"2020-09-30 14:00\",\n" +
                    "                \"organizer_email\": \"nikita_yarosh@gordic.cz\",\n" +
                    "                \"attendees\": [\n" +
//                    "                    \"stepan_sukovyc@gordic.cz\",\n" +
//                    "                    \"eduard_karbovanec@gordic.cz\"\n" +
                    "                ],\n" +
                    "                \"email_text\": \"Invitation\",\n" +
                    "                \"isAllDay\": \"false\"\n" +
                    "            }";
            /*
            {
                "subject": "Meeting",
                "content": "Some meeting",
                "date_from": "2020-09-23T10:00:00Z",
                "date_to": "2020-09-25T10:00:00Z",
                "organizer_email": "nikita_yarosh@gordic.cz",
                "attendees": [
                    "stepan_sukovyc@gordic.cz",
                    "eduard_karbovanec@gordic.cz"
                ],
                "email_text": "Invitation",
                "isAllDay": "true"
            }
            */
            JSONObject jsonObject = new JSONObject(jsonString);
            createRecordInCalendar(result.accessToken(), jsonObject);
            System.out.println("Press any key to exit ...");
//            System.in.read();

        } catch (Exception ex) {
            System.out.println("Oops! We have an exception of type - " + ex.getClass());
            System.out.println("Exception message - " + ex.getMessage());
            throw ex;
        }
    }

    private static IAuthenticationResult getAccessTokenByClientCredentialGrant() throws Exception {
        ConfidentialClientApplication app = ConfidentialClientApplication.builder(
                clientId,
                ClientCredentialFactory.createFromSecret(secret))
                .authority(authority)
                .build();

        // With client credentials flows the scope is ALWAYS of the shape "resource/.default", as the
        // application permissions need to be set statically (in the portal), and then granted by a tenant administrator
        ClientCredentialParameters clientCredentialParam = ClientCredentialParameters.builder(
                Collections.singleton(scope))
                .build();

        CompletableFuture<IAuthenticationResult> future = app.acquireToken(clientCredentialParam);
        return future.get();
    }

    private static String getUsersListFromGraph(String accessToken) throws IOException {
        URL url = new URL("https://graph.microsoft.com/v1.0/users");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("GET");
        conn.setRequestProperty("Authorization", "Bearer " + accessToken);
        conn.setRequestProperty("Accept", "application/json");

//        int httpResponseCode = conn.getResponseCode();
//        if (httpResponseCode == HTTPResponse.SC_OK) {
//
//            StringBuilder response;
//            try (BufferedReader in = new BufferedReader(
//                    new InputStreamReader(conn.getInputStream()))) {
//
//                String inputLine;
//                response = new StringBuilder();
//                while ((inputLine = in.readLine()) != null) {
//                    response.append(inputLine);
//                }
//            }
//            return response.toString();
//        } else {
//            return String.format("Connection returned HTTP code: %s with message: %s",
//                    httpResponseCode, conn.getResponseMessage());
//        }

        String response = getResponseStringFromConn(conn, true);

        int responseCode = conn.getResponseCode();
        if (responseCode != HttpURLConnection.HTTP_OK) {
            throw new IOException(response);
        }

        JSONObject responseObject = processResponse(responseCode, response, "Error in JSONObject");
        return responseObject.toString();
    }

    public static JSONObject processResponse(int responseCode, String errorCode, String errorMsg) throws JSONException {
        JSONObject response = new JSONObject();
        response.put("responseCode", responseCode);
        response.put("errorCode", errorCode);
        response.put("errorMsg", errorMsg);

        return response;
    }

    public static String getResponseStringFromConn(HttpURLConnection conn, boolean isSuccess) throws IOException {
        BufferedReader reader;
        if (isSuccess) {
            reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder stringBuffer = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            stringBuffer.append(line);
        }

        return stringBuffer.toString();
    }

    public static void createRecordInCalendar(String accessToken, JSONObject values) {
        System.out.println("Start adding...");
        // Create default logger to only log errors
        DefaultLogger logger = new DefaultLogger();
        logger.setLoggingLevel(LoggerLevel.ERROR);

        // Build a Graph client
        IGraphServiceClient graphClient = GraphServiceClient.builder()
                .authenticationProvider(request -> request.addHeader("Authorization", "Bearer " + accessToken))
                .logger(logger)
                .buildClient();

        System.out.println("Creating event...");
        Event event = new Event();
        event.subject = values.getString("subject");

        ItemBody body = new ItemBody();
        body.contentType = BodyType.HTML;
        body.content = values.getString("content");
        event.body = body;

        event.start = getDateTimeTimeZone(values.getString("date_from"));
        event.end = getDateTimeTimeZone(values.getString("date_to"));

        List<Attendee> attendeesList = new LinkedList<>();

        JSONArray arr = values.getJSONArray("attendees");
        System.out.println("JSONArray:\n" + arr);
        for (int i = 0; i < arr.length(); i++) {
            String email = arr.getString(i);
            Attendee attendee = new Attendee();
            EmailAddress emailAddress = new EmailAddress();
            emailAddress.address = email;
            emailAddress.name = values.getString("email_text");
            attendee.emailAddress = emailAddress;
            attendee.type = AttendeeType.REQUIRED;
            attendeesList.add(attendee);
        }
        event.attendees = attendeesList;
        event.isAllDay = Boolean.valueOf(values.getString("isAllDay"));

        User user = graphClient.users(values.getString("organizer_email")).buildRequest().get();
        graphClient.users().byId(user.id).events()
                .buildRequest()
                .post(event);
        System.out.println("The end of creating");
    }

    private static DateTimeTimeZone getDateTimeTimeZone(String date) {
        String[] arr = date.split(" ");
        DateTimeTimeZone timeZone = new DateTimeTimeZone();
        if (arr.length == 1) { //only day
            timeZone.dateTime = arr[0];
        } else { // day with time
            timeZone.dateTime = arr[0] + " " + (arr[1].split(":").length >= 3 ? arr[1] : arr[1] + ":00");
        }
        timeZone.timeZone = "UTC";
        return timeZone;
    }

    /**
     * Helper function unique to this sample setting. In a real application these wouldn't be so hardcoded, for example
     * different users may need different authority endpoints or scopes
     */
    private static void setUpSampleData() throws IOException {
        // Load properties file and set properties used throughout the sample
        Properties properties = new Properties();
        properties.load(ClientCredentialGrant.class.getResourceAsStream("application.properties"));
        authority = properties.getProperty("AUTHORITY");
        clientId = properties.getProperty("CLIENT_ID");
        secret = properties.getProperty("SECRET");
        scope = properties.getProperty("SCOPE");
    }
}
