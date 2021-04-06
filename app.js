let pronouns = ['the', 'ultimate'];
let adjs = ['generator', 'cheapest'];
let nouns = ['domain', 'pro-domain'];
let exts = ['com', 'net'];

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for (let ext of exts) {
                let domain = `${pronoun}${adj}${noun}.${ext}`
                console.log(domain);
            }
        }
    }
}