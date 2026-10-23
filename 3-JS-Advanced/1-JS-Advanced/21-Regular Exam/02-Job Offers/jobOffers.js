class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const addedNames = [];

        for (const candidate of candidates) {
            const [name, education, years] = candidate.split('-').map(part => part.trim());
            const yearsExperience = Number(years);
            const existing = this.jobCandidates.find(person => person.name === name);

            if (existing) {
                if (typeof existing.yearsExperience === 'number' && yearsExperience > existing.yearsExperience) {
                    existing.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({
                    name,
                    education,
                    yearsExperience
                });
            }

            if (!addedNames.includes(name)) {
                addedNames.push(name);
            }
        }

        return `You successfully added candidates: ${addedNames.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimal] = chosenPerson.split('-').map(part => part.trim());
        const minimalExperience = Number(minimal);
        const person = this.jobCandidates.find(candidate => candidate.name === name);

        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > person.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        person.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const person = this.jobCandidates.find(candidate => candidate.name === name);

        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary = '$40,000';

        if (person.education === 'Bachelor') {
            salary = '$50,000';
        } else if (person.education === 'Master') {
            salary = '$60,000';
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        const sorted = this.jobCandidates.slice().sort((a, b) => a.name.localeCompare(b.name));
        const lines = ['Candidates list:'];

        for (const person of sorted) {
            lines.push(`${person.name}-${person.yearsExperience}`);
        }

        return lines.join('\n');
    }
}

let jobs1 = new JobOffers('Google', 'Strategy Analyst');
console.log(jobs1.jobApplication(['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Daniel Jones- Bachelor-18']));

console.log("--------------------------------");

let jobs2 = new JobOffers('Google', 'Strategy Analyst');
console.log(jobs2.jobApplication(['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Daniel Jones- Bachelor-18']));
console.log(jobs2.jobOffer('John Doe-8'));
console.log(jobs2.jobOffer('Peter Parker-4'));
try {
    console.log(jobs2.jobOffer('John Jones-8'));
} catch (error) {
    console.log(error.message);
}

console.log("--------------------------------");

let jobs3 = new JobOffers('Google', 'Strategy Analyst');
console.log(jobs3.jobApplication(['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Daniel Jones- Bachelor-18']));
console.log(jobs3.jobOffer('John Doe-8'));
console.log(jobs3.jobOffer('Peter Parker-4'));
console.log(jobs3.salaryBonus('John Doe'));
console.log(jobs3.salaryBonus('Peter Parker'));

console.log("--------------------------------");

let jobs4 = new JobOffers('Google', 'Strategy Analyst');
console.log(jobs4.jobApplication(['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Jordan Cole-High School-5', 'Daniel Jones- Bachelor-18']));
console.log(jobs4.jobOffer('John Doe-8'));
console.log(jobs4.jobOffer('Peter Parker-4'));
console.log(jobs4.jobOffer('Jordan Cole-4'));
console.log(jobs4.salaryBonus('Jordan Cole'));
console.log(jobs4.salaryBonus('John Doe'));
console.log(jobs4.candidatesDatabase());
