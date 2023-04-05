function findTheOldest(arr) {
				if (arr.filter(people => !people.yearOfDeath).length == 0) return;
				
				const presentYear = new Date().getFullYear();
				const peopleSortedByAge = arr.sort(function(a, b) {
					
					let aAge;
					let bAge;
					if (a.yearOfDeath === undefined) {
						aAge = (presentYear - a.yearOfBirth);
					} else {
						aAge = (a.yearOfDeath - a.yearOfBirth);
					}

					if (b.yearOfDeath === undefined) {
						bAge = (presentYear - b.yearOfBirth);
					} else {
						bAge = (b.yearOfDeath - b.yearOfBirth);
					}

					if (aAge < bAge) {
						return 1;
					} else if (aAge > bAge) {
						return -1;
					} else if (aAge === bAge) {
						return 0;
					}
				});
				
				if (!peopleSortedByAge[0].yearOfDeath) return peopleSortedByAge[0];
				//return peopleSortedByAge;
			}

// Do not edit below this line
module.exports = findTheOldest;
