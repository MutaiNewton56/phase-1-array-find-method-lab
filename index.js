// code your solution here
function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    return win ? win.year : undefined;
}

// Example usage
const record = [
    { year: "2020", result: "L" },
    { year: "2021", result: "W" },
    { year: "2022", result: "L" }
];

console.log(superbowlWin(record)); // Output: "2021"
