import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/lifecycleDemo")
public class LifecycleDemoServlet extends HttpServlet {
    
    @Override
    public void init() throws ServletException {
        // Initialization code here
        System.out.println("Servlet is being initialized.");
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Service code here
        System.out.println("Servlet is servicing a request.");
        response.setContentType("text/html");
        response.getWriter().println("<h1>Servlet Lifecycle Demo</h1>");
        response.getWriter().println("<p>The service method is called to handle the request.</p>");
    }

    @Override
    public void destroy() {
        // Cleanup code here
        System.out.println("Servlet is being destroyed.");
    }
}
