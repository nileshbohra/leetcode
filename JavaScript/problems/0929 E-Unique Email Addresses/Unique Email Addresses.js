var numUniqueEmails = function (emails) {
    let emailsObj = {};
    const cleanEmail = (email) => {
        let splitEmail = email.split('@');
        let domain = splitEmail[1];
        let localName = splitEmail[0];
        if (localName.includes('+')) {
            localName = localName.split('+')[0];
        }
        localName = localName.replaceAll('.', '');
        let newEmail = localName + '@' + domain;
        if (!emailsObj[newEmail]) {
            emailsObj[newEmail] = true;
        }
    }
    emails.forEach(email => {
        cleanEmail(email);
    })
    return Object.keys(emailsObj).length;
};