import 'boxicons'

const Auth = () => {
    return (
        <section>
            <div>
                <form>
                    <h1>Create Account</h1>
                    <div>
                        <a href=""><i className={'bx bxl-google'}></i></a>
                        <a href=""><i className={'bx bxl-facebook'}></i></a>
                        <a href=""><i className={'bx bxl-github'}></i></a>
                        <a href=""><i className={'bx bxl-linkedin'}></i></a>
                    </div>
                    <span>Register with E-mail</span>
                    <input type="text" name="name" id="name" placeholder='Name'/>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </section>
    )
}
export default Auth;