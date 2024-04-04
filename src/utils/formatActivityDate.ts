const formatActivityDate = (seconds: number) => new Date(seconds * 1000).toLocaleString("en-GB");

export default formatActivityDate;
