import Link from "next/link";

const NotLoggedIn = () => {
  return (
    <div>
      <h1>You are not logged in</h1>
      <p className="mt-4">and can therefore can not access this page.</p>
      <p>But, you can</p>
      <div className="d-flex gap-2 mt-4 fw-semibold">
        <Link href="/login" className="bg-lighter rounded-1 py-2 px-5 text-decoration-none" id="login">
          log in here
        </Link>
        <Link href="/register" className="bg-lighter rounded-1 py-2 px-5 text-decoration-none" id="register">
          or register here
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedIn;
