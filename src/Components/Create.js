import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from "./Translations/en/TranslationPage.json";
import tar from "./Translations/ar/TranslationPage.json";
import tchi from "./Translations/chi/TranslationPage.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ten,
    },
    chi: {
      translation: tchi,
    },
    ar: {
      translation: tar,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const changeLanguage = (lang) => {
  return () => {
    i18n.changeLanguage(lang);
  };
};

const useStyles = makeStyles({});

export default function Create() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container>
      <br />
      <Typography variant="h6" color="textSecondary" component="h2">
        Create Note
      </Typography>
      <br />
      <Button
        onClick={() => console.log("You just Clicked me")}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("en")}
      >
        English
      </Button>
      <Button
        onClick={() => console.log("You just Clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("chi")}
      >
        Chinese
      </Button>
      <Button
        onClick={() => console.log("You just Clicked me")}
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("ar")}
      >
        Arabic
      </Button>
      <br />
      <br />
      <Typography variant="h5" color="textSecondary" component="h2">
        <p>{t("welcome to react")}</p> <br></br>
        <p>{t("welcome to")}</p> <br></br>
        <p>{t("welcome")}</p> <br></br>
      </Typography>
    </Container>
  );
}
