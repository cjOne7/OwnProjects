package calendar;

import com.microsoft.graph.authentication.IAuthenticationProvider;
import com.microsoft.graph.http.IHttpRequest;

public class SimpleAuthProvider implements IAuthenticationProvider {

    private final String accessToken;

    public SimpleAuthProvider(final String accessToken) {
        this.accessToken = accessToken;
    }

    @Override
    public void authenticateRequest(final IHttpRequest request) {
        // Add the access token in the Authorization header
        request.addHeader("Authorization", "Bearer " + accessToken);
    }
}