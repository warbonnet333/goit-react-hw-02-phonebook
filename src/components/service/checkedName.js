const checkedName = (contactList, newName) =>
    contactList.find(({ name }) => {
        if (name.toLowerCase() === newName.toLowerCase()) {
            return newName
        }
        return false
    })

export default checkedName