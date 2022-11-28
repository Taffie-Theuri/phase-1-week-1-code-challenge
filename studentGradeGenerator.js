function gradeGenerator(grade)
{
    if (grade<40)//Any grade below 40(not including 40)
    {
        return "Your grade is: E"
    }
    else if (grade<=49 )// From 40 - 49 is a grade D
    {
        return "Your grade is: D"
    }
    else if (grade<=59 )//A score of 50 to 59 earns a grade C
    {
        return "Your grade is: C"
    }
    else if (grade<=79)//Ay score from 60 to 79 is a B
    {
        return "Your grade is: B"
    }
    else if (grade>=80 && grade<=100)
    {
        return "Your grade is: A"//Any score from 80 -100
    }
    else
    {
        return "Please enter a score between 0 and 100"//reject any score outside the range

    }
}

//test code
console.log(gradeGenerator(50));
console.log(gradeGenerator(59));
console.log(gradeGenerator(86));
console.log(gradeGenerator(79));
