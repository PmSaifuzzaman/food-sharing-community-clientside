import errorImg from "../../assets/images/errorPage.jpg"

const ErrorPage = () => {
    return (
        <div>
            <img className="h-screen w-screen object-cover" src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;