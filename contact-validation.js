(function (root, factory) {
  const validation = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = validation;
  } else {
    root.ContactFormValidation = validation;
  }
})(globalThis, function () {
  const NAME_ERROR = "Please enter your full name with at least four characters.";
  const PHONE_ERROR = "Please enter a valid 10-digit mobile number.";
  const EMAIL_ERROR = "Please enter a valid email address.";
  const PAST_DATE_ERROR = "Please select a current or future date (IST).";
  const PAST_TIME_ERROR =
    "This time slot has already passed. Please select a future time slot.";

  const RESERVATION_SLOTS = [
    "12:00 PM (Lunch)",
    "12:45 PM (Lunch)",
    "1:30 PM (Lunch)",
    "2:15 PM (Lunch)",
    "6:30 PM (Dinner)",
    "7:15 PM (Dinner)",
    "8:00 PM (Dinner)",
    "8:45 PM (Dinner)",
    "9:30 PM (Dinner)",
    "10:15 PM (Late Night)",
    "11:00 PM (Midnight Slurp)",
  ];

  const PICKUP_SLOTS = [
    "In 20 minutes",
    "In 35 minutes",
    "In 50 minutes",
    "Today at 1:00 PM",
    "Today at 7:30 PM",
    "Today at 8:30 PM",
    "Today at 9:30 PM",
  ];

  const isValidEmail = (email) =>
    /^[^\s@]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/.test(
      email,
    );

  const validateContactDetails = ({ name = "", phone = "", email = "" }) => {
    const errors = {};
    if (Array.from(String(name).trim()).length < 4) errors.name = NAME_ERROR;
    if (!/^[0-9]{10}$/.test(String(phone))) errors.phone = PHONE_ERROR;
    if (String(email).trim() && !isValidEmail(String(email).trim())) {
      errors.email = EMAIL_ERROR;
    }
    return errors;
  };

  const getIstDateTime = (date = new Date()) => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }).formatToParts(date);
    const values = Object.fromEntries(
      parts
        .filter((part) => part.type !== "literal")
        .map((part) => [part.type, part.value]),
    );

    return {
      date: `${values.year}-${values.month}-${values.day}`,
      minuteOfDay: Number(values.hour) * 60 + Number(values.minute),
      second: Number(values.second),
    };
  };

  const isValidDate = (date) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const parsed = new Date(`${date}T00:00:00.000Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
  };

  const timeSlotInMinutes = (slot) => {
    if (!RESERVATION_SLOTS.includes(slot)) return null;
    const match = slot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!match) return null;

    const displayedHour = Number(match[1]);
    const minute = Number(match[2]);
    if (displayedHour < 1 || displayedHour > 12 || minute > 59) return null;

    let hour = displayedHour % 12;
    if (match[3].toUpperCase() === "PM") hour += 12;
    return hour * 60 + minute;
  };

  const isPastReservationSlot = (date, slot, now = getIstDateTime()) => {
    const selectedMinutes = timeSlotInMinutes(slot);
    return (
      date === now.date &&
      selectedMinutes !== null &&
      selectedMinutes * 60 < now.minuteOfDay * 60 + now.second
    );
  };

  const validateReservation = (
    { date = "", time = "" },
    now = getIstDateTime(),
  ) => {
    const errors = {};
    if (!date) {
      errors.date = "Please select a date.";
    } else if (!isValidDate(date) || date < now.date) {
      errors.date = PAST_DATE_ERROR;
    }

    if (!time) {
      errors.time = "Please choose a dining time.";
    } else if (timeSlotInMinutes(time) === null) {
      errors.time = "Please choose a valid dining time.";
    } else if (!errors.date && isPastReservationSlot(date, time, now)) {
      errors.time = PAST_TIME_ERROR;
    }

    return errors;
  };

  const validateEnquiry = (type, data, now = getIstDateTime()) => {
    const errors = validateContactDetails(data);
    if (type === "reservation") {
      return { ...errors, ...validateReservation(data, now) };
    }
    if (type === "order") {
      if (!PICKUP_SLOTS.includes(data.pickup_time)) {
        errors.pickup_time = "Please pick an approximate pickup time.";
      }
      return errors;
    }
    if (type !== "catering") errors.form = "Please choose a valid enquiry type.";
    return errors;
  };

  return {
    EMAIL_ERROR,
    NAME_ERROR,
    PAST_DATE_ERROR,
    PAST_TIME_ERROR,
    PHONE_ERROR,
    PICKUP_SLOTS,
    RESERVATION_SLOTS,
    getIstDateTime,
    isPastReservationSlot,
    timeSlotInMinutes,
    validateContactDetails,
    validateEnquiry,
    validateReservation,
  };
});
