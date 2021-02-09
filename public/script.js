const $submit = document.getElementById("submit_min_wage");
$submit.onclick = sendAnswer;

function sendAnswer() {
    const $minWage = document.getElementById("minimum_wage");
    const answer = $minWage.value;
    fetch("/poll", {
        method: "POST",
        body: JSON.stringify({answer}),
        headers: {
            "Content-Type":"application/json"
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}