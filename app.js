// phone class represent a phone
class Contact{
	constructor(firstName, lastName, phoneNumber, email){
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email
	}
}

// UI class: handle UI Tasks
class UI{
	static displayContacts(){
		const phoneBooks = [
			{
				firstName: 'Iradukunda',
				lastName: 'Auxile',
				phoneNumber: '0788963132',
				email: 'auxile.isaac@gmail.com'
			},
			{
				firstName: 'Iradukunda',
				lastName: 'Auxile',
				phoneNumber: '0788963132',
				email: 'auxile.isaac@gmail.com'
			},
			{
				firstName: 'Iradukunda',
				lastName: 'Auxile',
				phoneNumber: '0788963132',
				email: 'auxile.isaac@gmail.com'
			}
		];
		const contacts = phoneBooks;

		contacts.forEach((contact) => UI.addContactList(contact));
	}

	static addContactList(contact){
		const list = document.querySelector('#phone-list');

		const row = document.createElement('tr');

		row.innerHTML = `
			<td>${contact.firstName}</td>
			<td>${contact.lastName}</td>
			<td>${contact.phoneNumber}</td>
			<td>${contact.email}</td>
			<td><a href="#" class="delete">X</a></td>
		`;

		list.appendChild(row);
	}
	static deleteContact(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}

	static clearFilds(){
		document.querySelector('#firstName').value = '';
		document.querySelector('#lastName').value = '';
		document.querySelector('#phoneNumber').value = '';
		document.querySelector('#email').value = '';
	}

}

// store class: handles storage

// event: Display contact
document.addEventListener('DOMContentLoaded', UI.displayContacts);
// event: add contact
document.querySelector('#phone-form').addEventListener('submit', (e)=> {
		// prevent actual submit
		e.preventDefault()

		// get form values
		const firstName = document.querySelector('#firstName').value;
		const lastName = document.querySelector('#lastName').value;
		const phoneNumber = document.querySelector('#phoneNumber').value;
		const email = document.querySelector('#email').value;

		// instatiate Contact
		const contact = new Contact(firstName, lastName, phoneNumber, email);
		
		// add contact to UI
		UI.addContactList(contact)

		// Clear fields
		UI.clearFilds();

	});
// event: remove contact
document.querySelector('#phone-list').addEventListener('click', (e)=>{
	UI.deleteContact(e.target)
})