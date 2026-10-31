import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Container from "../components/Container";

const fieldClass =
  "w-full rounded-lg border bg-white px-3 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const isRegister = mode === "register";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const switchMode = (next) => {
    setMode(next);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (isRegister && !values.name.trim()) found.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) found.email = "Please enter a valid email address.";
    if (values.password.length < 6) found.password = "Password must be at least 6 characters.";
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: call your authentication API here. For now we just go home.
    navigate("/");
  };

  const props = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `${fieldClass} ${errors[name] ? "border-red-500" : "border-gray-300"}`,
  });

  const error = (name) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-1 text-[13px] text-red-500">
        {errors[name]}
      </p>
    );

  return (
    <Container className="flex justify-center py-10 sm:py-16">
      <div className="w-full max-w-md overflow-hidden rounded-[14px] bg-white shadow-lg">
        <div role="tablist" aria-label="Account" className="grid grid-cols-2 bg-[#F6FAFF]">
          {[
            ["login", "Sign In"],
            ["register", "Create Account"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={mode === key}
              onClick={() => switchMode(key)}
              className={`cursor-pointer py-3.5 text-[14px] font-bold transition-colors sm:text-[16px] ${
                mode === key ? "bg-white text-brand" : "text-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 p-5 sm:p-8">
          <div>
            <h1 className="text-2xl font-extrabold text-ink">
              {isRegister ? "Join Medico Store" : "Welcome back"}
            </h1>
            <p className="mt-1 text-[14px] text-muted">
              {isRegister
                ? "Create an account to save your wishlist and order faster."
                : "Sign in to continue to your account."}
            </p>
          </div>

          {isRegister && (
            <div>
              <label htmlFor="name" className="mb-1 block text-[14px] font-semibold text-copy">Full name</label>
              <input type="text" autoComplete="name" {...props("name")} />
              {error("name")}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-[14px] font-semibold text-copy">Email</label>
            <input type="email" autoComplete="email" {...props("email")} />
            {error("email")}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-[14px] font-semibold text-copy">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete={isRegister ? "new-password" : "current-password"}
                {...props("password")}
                className={`${props("password").className} pr-11`}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex w-11 cursor-pointer items-center justify-center text-xl text-muted hover:text-ink"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            {error("password")}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-brand py-3 text-[16px] font-bold text-white transition-colors hover:bg-brand-hover"
          >
            {isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>
      </div>
    </Container>
  );
}
