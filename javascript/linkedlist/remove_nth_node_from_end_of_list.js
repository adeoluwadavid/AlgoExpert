"use strict";
function removeNthFromEnd(head, n) {
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast)
        return head.next;
    while (fast.next)
        fast = fast.next, slow = slow.next;
    slow.next = slow.next.next;
    return head;
}
;
console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
