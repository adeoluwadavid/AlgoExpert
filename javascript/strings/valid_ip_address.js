"use strict";
/**
 * You're given a string of length 12 or smaller, container only digits. Write a function that returns all the possible IP addresses that can be created by inserting three .s in the string.
 *
 * An IP address is a sequence of four positive integers that are separated by . s, where each individual integer is within the range 0 - 255, inclusive.
 *
 * An IP address isn't valid if any of the individual integers contains leading 0s. For example, '192.168.0.1' is a valid IP address, but '192.168.00.1' and '192.168.0.01' aren't,
 * because they contain '00' and '01', respectively. Another example of a valid IP address is '99.1.1.10'; conversely, '991.1.1.0' isn't valid, because '991' is greater then 255.
 *
 * Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, your function should return an empty list.
 *
 * Note: check out our Systems Design Fundamentals on SystemsExpert to learn more about IP addresses!
 */
function validIPAddresses(string) {
    // Write your code here.
    const ipAddressesFound = [];
    for (let i = 0; i < Math.min(string.length, 4); i++) {
        const currentIPAddressParts = ["", "", ""];
        currentIPAddressParts[0] = string.slice(0, i);
        if (!isValidPart(currentIPAddressParts[0]))
            continue;
        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
            currentIPAddressParts[1] = string.slice(i, j);
            if (!isValidPart(currentIPAddressParts[1]))
                continue;
            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
                currentIPAddressParts[2] = string.slice(j, k);
                currentIPAddressParts[3] = string.slice(k);
                if (isValidPart(currentIPAddressParts[2]) &&
                    isValidPart(currentIPAddressParts[3])) {
                    ipAddressesFound.push(currentIPAddressParts.join("."));
                }
            }
        }
    }
    return ipAddressesFound;
}
function isValidPart(string) {
    const stringAsInt = parseInt(string);
    if (stringAsInt > 255)
        return false;
    return string.length === stringAsInt.toString().length;
}
validIPAddresses("1921680");
