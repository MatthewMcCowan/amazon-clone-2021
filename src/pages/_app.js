import "@material-tailwind/react/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Head from "next/head";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
