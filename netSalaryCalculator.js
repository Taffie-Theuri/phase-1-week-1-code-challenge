//Assumption: There are no benefits
 function calculatePayee (grossSalary)
 {
    if(grossSalary<=24000)
    {
        return Math.floor(grossSalary*0.1);
    }
    if(grossSalary >= 24001 && grossSalary <= 32333)
    {
        return Math.floor(grossSalary*0.25);
    }
    if(grossSalary > 32333)
    {
        return Math.floor(grossSalary*0.3);
    }

}
function calculateNhif (grossSalary)
{
    //use a for loop to iterate through the rates and get the right deduction.
    for(let i = 0; i<=rate.length-1; i++)
    {

        const currentRate = rate[i];

        //start is the min salary in the range
        //end is the max salary in the range
        if(grossSalary>=currentRate.start && grossSalary<=currentRate.end){

            return currentRate.deduction;
        }
    }
}

function calculateNssf(grossSalary)
{
    //object to store the nssf new rates
    const nssfNewRates =
    {
        tierRate: 0.06,//6%
        tier1Max: 6000,
        tier2Max: 18000,
    }
    //getting nssf deduction
    if(grossSalary <= nssfNewRates.tier1Max)
    {
        return (grossSalary*nssfNewRates.tierRate);
    }
    else if (grossSalary > nssfNewRates.tier1Max)
    {
        let deduction = ((nssfNewRates.tier2Max - nssfNewRates.tier1Max)*nssfNewRates.tierRate);
        if (grossSalary > nssfNewRates.tier1Max)
        {
            let deduction1 = nssfNewRates.tier1Max
            let deduction2 = deduction1 * (nssfNewRates.tierRate);
            return deduction+deduction2;
        }
        else
        {
            let deduction1 = grossSalary;
            let deduction2 = deduction1 * (nssfNewRates.tierRate);
            return deduction+deduction2;

        }

    }
}

function calculateNetSalary(grossSalary)
{
    return (grossSalary-calculatePayee(grossSalary)-calculateNssf(grossSalary)-calculateNhif(grossSalary))
}
const netSalaryCalculator = (grossSalary)=> {
    //summary of deductions
    let payee = calculatePayee(grossSalary)
    let nhif = calculateNhif(grossSalary);
    let nssf = calculateNssf(grossSalary);
    let netSalary = calculateNetSalary(grossSalary);
    console.log({payee,nhif,nssf,netSalary})
}
//nhif rates
const rate = [{
    start: 0,//start represents the min amount in the range of salaries
    end: 5999,//end represents the max amount in the range of salaries
    deduction: 150// from the given range (start and end) the amount to be deducted from gross Salary
},
{
    start: 6000,
    end: 7999,
    deduction: 300
},
{
    start: 8000,
    end: 11999,
    deduction: 400
},
{
    start: 12000,
    end: 14999,
    deduction: 500
},
{
    start: 15000,
    end: 19999,
    deduction: 600
},
{
    start: 20000,
    end: 24999,
    deduction: 750
},
{
    start: 25000,
    end: 29999,
    deduction: 850
},
{
    start: 30000,
    end: 34999,
    deduction: 900
},
{
    start: 35000,
    end: 39999,
    deduction: 950
},
{
    start: 40000,
    end: 44999,
    deduction: 1000
},
{
    start: 45000,
    end: 49999,
    deduction: 1100
},
{
    start: 50000,
    end: 59999,
    deduction: 1200
},{
    start: 60000,
    end: 69999,
    deduction: 1300
},
{
    start: 70000,
    end: 79999,
    deduction: 1400
},
{
    start: 80000,
    end: 89999,
    deduction: 1500
},
{
    start: 90000,
    end: 99999,
    deduction: 1600
},
{
    start: 100000,
    end: Number.MAX_SAFE_INTEGER,//upper limit absent
    deduction: 1700,
}]