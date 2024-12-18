import React from "react";
import { Link, useRouteError } from "react-router-dom";
import BackgroundImage from "../components/ui/BackgroundImage";
import { ROUTES } from "../routing/routes";
import errorPageBackground from "../assets/images/desktop/broken_car.webp";

interface ErrorPageProps {
  error?: string | null;
}
const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const routeError = useRouteError();
  const errorMessage =
    error ||
    (routeError instanceof Error
      ? routeError.message
      : "Сталася неочікувана помилка.");

  return (
    <div className="relative h-screen w-screen bg-cover">
      <BackgroundImage
        src={errorPageBackground}
        alt="Error Page Background"
        blur="bg-black/70"
        styles="h-full"
      />
      <div className="absolute inset-0 z-30 flex flex-col items-center gap-5 p-5 text-center">
        <h1 className="text-3xl font-bold">На жаль, сталася помилка!</h1>

        <h2 className="text-2xl text-red-700">{`"${errorMessage}"`}</h2>
        <p className="text-xl">
          Наразі ми маємо деякі технічні труднощі. Будь ласка, спробуйте знову
          пізніше.
        </p>
        <Link
          to={ROUTES.index}
          className="mt-4 flex items-center justify-center rounded-lg border border-white bg-red-700 hover:bg-red-500"
        >
          <button
            aria-label="Back to home page button"
            className="px-6 py-2 text-xl font-bold uppercase"
          >
            Повернутись на головну
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
