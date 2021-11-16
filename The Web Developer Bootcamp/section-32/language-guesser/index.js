import { franc } from "franc";
import langs from "langs";

const languageCode = franc(process.argv[2]);

if (languageCode !== "und") {
    const language = langs.where("2", languageCode);
    console.log(language.name);
} else {
    console.log("Unknown language");
}