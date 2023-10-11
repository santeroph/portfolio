script.js 
    document.getElementById('athleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var plan = document.getElementById('plan').value;
    var weight = document.getElementById('weight').value;
    var category = document.getElementById('category').value;
    var competitions = document.getElementById('competitions').value;
    var coaching = document.getElementById('coaching').value;

    var planCost;
    switch (plan) {
        case 'beginner':
            planCost = 25 * 4; // $25 per week, 4 weeks per month
            break;
        case 'intermediate':
            planCost = 30 * 4; // $30 per week, 4 weeks per month
            break;
        case 'elite':
            planCost = 35 * 4; // $35 per week, 4 weeks per month
            break;
    }

    var competitionCost = competitions * 22; // $22 per competition
    var coachingCost = coaching * 9; // $9 per hour

    var totalCost = planCost + competitionCost + coachingCost;

    alert('Athlete Name: ' + name +
          '\nTraining Plan Cost: $' + planCost.toFixed(2) +
          '\nCompetition Cost: $' + competitionCost.toFixed(2) +
          '\nPrivate Coaching Cost: $' + coachingCost.toFixed(2) +
          '\nTotal Cost: $' + totalCost.toFixed(2));
});
