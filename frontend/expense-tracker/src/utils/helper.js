import moment from 'moment'
import { data } from 'react-router-dom';

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ")
    let initals = ""
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initals += words[i][0]
    }

    return initals.toUpperCase();
}

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    const [integerPartRaw, fractionalPart] = num.toString().split(".");
    const isNegative = integerPartRaw.startsWith("-");
    const integerPart = isNegative ? integerPartRaw.slice(1) : integerPartRaw;

    const lastThree = integerPart.slice(-3);
    const otherDigits = integerPart.slice(0, -3);

    const formattedOther = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    const formattedInteger = otherDigits ? `${formattedOther},${lastThree}` : lastThree;

    const formattedNumber = fractionalPart
        ? `${formattedInteger}.${fractionalPart}`
        : formattedInteger;

    return `${isNegative ? "-" : ""}₹${formattedNumber}`;
};

export const prepareExpenseBarChartData = (data = []) => {
    const chartData = data.map((item) => (
        {
            category: item?.category,
            amount: item?.amount
        }
    ))
    return chartData
}

export const prepareIncomeBarChartData = (data = []) => {
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date))

    const chartData = sortedData.map((item) => (
        {
            month: moment(item?.date).format("Do MMM YYYY"),
            amount: item?.amount,
            source: item?.source
        }
    ))
    return chartData
}

export const prepareExpenseLineChartData = (data = []) => {
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date))

    const chartData = sortedData.map((item) => (
        {
            month: moment(item?.date).format("Do MMM YYYY"),
            amount: item?.amount,
            category: item?.category
        }
    ))
    return chartData
}