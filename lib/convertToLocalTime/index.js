"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `convertToLocalTime` function takes a date and tries to convert it to the system
 * equivalent date base on the system timeZone.
 * @param {Date | string | number} clientDate
 */
function convertToLocalTime(clientDate, timeZone) {
    const dateString = new Date(clientDate).toLocaleString("en-US", {
        hour12: false,
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        month: "2-digit",
        year: "numeric",
        ...(timeZone ? { timeZone } : {}),
    });
    const [date, time] = dateString.split(", ");
    const [hour, minute] = time.split(":");
    const [month, day, year] = date.split("/");
    //YYYY-MM-DDTHH:MM:SSZ
    const localDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:00Z`);
    return new Date(localDate.getTime() - 60 * 60 * 1000);
}
exports.default = convertToLocalTime;
//# sourceMappingURL=index.js.map