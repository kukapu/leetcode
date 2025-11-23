/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// MISOLUCION
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    // --- PASO 1: Función Recursiva para obtener el String ---
    // Recorre la lista hasta el final y concatena al regresar para invertir el orden
    const getNumString = (node: ListNode | null): string => {
        if (!node) return "";
        return getNumString(node.next) + node.val.toString();
    };

    // --- PASO 2: Generar números y Sumar ---
    const strNum1 = getNumString(l1);
    const strNum2 = getNumString(l2);

    // Usamos BigInt porque los constraints dicen hasta 100 nodos.
    // El tipo 'number' normal fallaría con números tan grandes.
    const num1 = BigInt(strNum1);
    const num2 = BigInt(strNum2);

    const totalSum = num1 + num2;

    // --- PASO 3: Iterar sobre el resultado para crear la Linked List ---
    const sumStr = totalSum.toString();
    
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    // El string "807" representa el número 807.
    // La Linked List debe ser inversa (unidades primero): 7 -> 0 -> 8.
    // Por eso iteramos el string desde el final hacia el principio.
    for (let i = sumStr.length - 1; i >= 0; i--) {
        const digit = parseInt(sumStr[i]);
        current.next = new ListNode(digit);
        current = current.next;
    }

    return dummyHead.next;
};

// @lc code=end

// SOLUCION MAS EFICIENTE
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     let DummyHead = new ListNode();
//     let current = DummyHead;
//     let next = 0;

//     while(l1 != null || l2 != null){
//         let x = (l1 != null) ? l1.val : 0;
//         let y = (l2 != null) ? l2.val : 0;

//         let sum = x+y+next;

//         current.next = new ListNode(sum % 10);
//         current = current.next;
//         next = Math.floor(sum / 10);
//         if(l1 != null){
//             l1 = l1.next;
//         }
//         if(l2 != null){
//             l2 = l2.next;
//         }


//     }

//     if(next > 0){
//         current.next = new ListNode(next);

//     }
//     return DummyHead.next;

// };
