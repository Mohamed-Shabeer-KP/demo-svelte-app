<script>
    let num1 = 0;
    let num2 = 0;
</script>

<diV>
    <p><u>Enter 2 numbers to add the numbers and display the result</u></p>
    
    Number 1 : <input type="number" bind:value={num1}/> <input type="range" bind:value={num1}>
    Number 2 : <input type="number" bind:value={num2}/> <input type="range" bind:value={num2}>
    Result : {num1 + num2}
</diV>