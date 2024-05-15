import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit a form through fetch
        // Need to create the form
        const form = new FormData(event.target);
        // Now we are able to fetch the email and password from the form
        const email = form.get("email");
        const password = form.get("password");

        // Make our post fetch request
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then((res)=> res.json())
        // We have to reroute the user to their profile page
        // /profile/:id
        .then((userData)=> navigate(`/profile/${userData.data.id}`))
    }

    return (
        <section>
            <h1>Hey, please sign in below:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Enter your Email"/>
                <input type="password" name="password" placeholder="Enter your Password"/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}