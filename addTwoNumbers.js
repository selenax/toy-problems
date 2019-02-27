/* eslint-disable func-names */
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let head = new ListNode(0);
  const result = head;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    head.next = new ListNode(sum % 10);
    head = head.next;
    sum = sum > 9 ? 1 : 0;
  }
  // if there's carry over, and done iterating through both list, add the carry over as last node
  if (sum) {
    head.next = new ListNode(sum);
  }
  //since the first node is 0; return from the next node;
  return result.next;
};

//refactor for shorter code but the first function still has faster execution time by a little
const addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = 0;
  let head = new ListNode(0);
  let result = head;

  while (l1 || l2 || carry > 0) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);

    head = head.next;

    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
  }
  return result.next;
};
