package calendar;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;
import java.util.regex.Pattern;

import com.microsoft.graph.core.ClientException;
import com.microsoft.graph.logger.DefaultLogger;
import com.microsoft.graph.logger.LoggerLevel;
import com.microsoft.graph.models.extensions.*;
import com.microsoft.graph.models.generated.AttendeeType;
import com.microsoft.graph.models.generated.BodyType;
import com.microsoft.graph.options.Option;
import com.microsoft.graph.options.QueryOption;
import com.microsoft.graph.requests.extensions.GraphServiceClient;
import com.microsoft.graph.requests.extensions.IEventCollectionPage;

public class Graph {
    /**
     * Date style yyyy/MM/dd (also allowed delimiters: '.' ':' '-'). Example, 2020.5:03 - correct, 2020,02,30 - incorrect
     */
    private static final Pattern DATE_PATTERN
            = Pattern.compile("^\\d{4}([:\\-/.])(0?[1-9]|1[0-2])([:\\-/.])(0?[1-9]|[12][0-9]|3[01])$");
    /**
     * Time style HH:mm. Example, 16:55 - correct, 25:62 - incorrect
     */
    private static final Pattern TIME_PATTERN
            = Pattern.compile("^(00|0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$");

    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    private static final Pattern NUMBER_PATTERN = Pattern.compile("^[\\d]$");

    private static IGraphServiceClient graphClient = null;

    private static void ensureGraphClient(String accessToken) {
        if (graphClient == null) {
            // Create the auth provider
            SimpleAuthProvider authProvider = new SimpleAuthProvider(accessToken);

            // Create default logger to only log errors
            DefaultLogger logger = new DefaultLogger();
            logger.setLoggingLevel(LoggerLevel.ERROR);

            // Build a Graph client
            graphClient = GraphServiceClient.builder()
                    .authenticationProvider(authProvider)
                    .logger(logger)
                    .buildClient();
        }
    }

    public static User getUser(String accessToken) {
        ensureGraphClient(accessToken);
        // GET /me to get authenticated user
        return graphClient
                .me()
                .buildRequest()
                .get();
    }

    public static List<Event> getEvents(String accessToken) {
        ensureGraphClient(accessToken);

        // Use QueryOption to specify the $orderby query parameter
        final List<Option> options = new LinkedList<>();
        // Sort results by createdDateTime, get newest first
        options.add(new QueryOption("orderby", "createdDateTime DESC"));

        // GET /me/events
        IEventCollectionPage eventPage;
        try {
            eventPage = graphClient
                    .me()
                    .events()
                    .buildRequest(options)
                    .select("subject,organizer,start,end")
                    .get();
            return eventPage.getCurrentPage();
        } catch (ClientException e) {
            System.out.println("Empty events");
        }
        return null;
    }

    public static void createRecordInCalendar(String accessToken) {
        // Create the auth provider
        SimpleAuthProvider authProvider = new SimpleAuthProvider(accessToken);

        // Create default logger to only log errors
        DefaultLogger logger = new DefaultLogger();
        logger.setLoggingLevel(LoggerLevel.ERROR);

        // Build a Graph client
        IGraphServiceClient graphClient = GraphServiceClient.builder()
                .authenticationProvider(authProvider)
                .logger(logger)
                .buildClient();

        Event event = new Event();
        event.subject = enterStringParam("Enter subject:");

        ItemBody body = new ItemBody();
        body.contentType = BodyType.HTML;
        body.content = enterStringParam("Enter content:");
        event.body = body;

        event.start = getDateTimeTimeZone("start");
        event.end = getDateTimeTimeZone("end");

        LinkedList<Attendee> attendeesList = new LinkedList<>();
        addAttendee(attendeesList, "st58211@upce.cz", "Andrii");
        addAttendee(attendeesList, "st58310@upce.cz", "Nik");
        event.attendees = attendeesList;

        //        event.attendees = createAttendees(
        //                Integer.parseInt(
        //                        checkForPattern(NUMBER_PATTERN, "Enter number of attendees:").trim()
        //                )
        //        );

        graphClient.me().events().buildRequest().post(event);
    }

    // Not working, but need to be tested more
    //    public static List<Attendee> createAttendees(int number) {
    //        List<Attendee> attendeesList = new LinkedList<>();
    //        for (int i = 0; i < number; i++) {
    //            Attendee attendee = new Attendee();
    //            EmailAddress emailAddress = new EmailAddress();
    //            emailAddress.address = checkForPattern(EMAIL_PATTERN, "Enter email address:");
    //            emailAddress.name = enterStringParam("Enter name of event:");
    //            attendee.emailAddress = emailAddress;
    //            attendee.type = AttendeeType.REQUIRED;
    //            attendeesList.add(attendee);
    //        }
    //        return attendeesList;
    //    }

    private static DateTimeTimeZone getDateTimeTimeZone(String word) {
        DateTimeTimeZone timeZone = new DateTimeTimeZone();
        String date = checkForPattern(DATE_PATTERN, String.format("Enter %s date in format yyyy.MM.dd. Also you can use this symbols for delimiting: '-', '/', ':'.", word));
        String time = checkForPattern(TIME_PATTERN, String.format("Enter %s time in format hh:mm", word));
        timeZone.dateTime = date + "T" + formatTime(time) + ":00Z";
        timeZone.timeZone = "Pacific Standard Time";
        return timeZone;
    }

    private static LocalTime formatTime(String time) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        LocalTime localTime = LocalTime.parse(time, formatter);
        localTime = localTime.plusHours(-getTimeCode());
        return localTime;
    }

    private static String enterStringParam(String message) {
        System.out.println(message);
        Scanner inputUserData = new Scanner(System.in);
        return inputUserData.nextLine();
    }

    private static String checkForPattern(Pattern pattern, String message) {
        Scanner inputUserData = new Scanner(System.in);

        System.out.println(message);
        while (true) {
            String str = inputUserData.nextLine().trim();
            if (isMatches(pattern, str)) {
                return str;
            }
            else {
                System.err.println("Wrong format!");
            }
        }
    }

    private static boolean isMatches(Pattern datePattern, String date) {
        return datePattern.matcher(date).matches();
    }

    private static int getTimeCode() {
        //Get current time
        TimeZone tz = TimeZone.getDefault();
        Date now = new Date();
        //You need to divine by 3_600_000 millis in order to get value in hours
        return tz.getOffset(now.getTime()) / 3_600_000;
    }

    private static void addAttendee(LinkedList<Attendee> attendeesList, String address, String name) {
        Attendee attendees = new Attendee();
        EmailAddress emailAddress = new EmailAddress();
        emailAddress.address = address;
        emailAddress.name = name;
        attendees.emailAddress = emailAddress;
        attendees.type = AttendeeType.REQUIRED;
        attendeesList.add(attendees);
    }
}