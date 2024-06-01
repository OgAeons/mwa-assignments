package assignment-5.B;

public class MessageStore {
    private String message;

    public MessageStore() {
        message = "Hello Struts2!";
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

