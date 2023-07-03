import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";

export default function About() {

    const { i18n, t } = useTranslation(["About"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            <select
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="jp">Japanese</option>
            </select>
            <h1>{t("about-heading")}</h1>
            <p>{t("about-content")}</p>
            <button>{t("about-btn")}</button>
        </div>
    )
}