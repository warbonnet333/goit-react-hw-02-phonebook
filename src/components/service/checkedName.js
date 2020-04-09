const checkedName = (contactList, newName) =>
    contactList.find(({ name }) => name.toLowerCase() === newName.toLowerCase())

export default checkedName