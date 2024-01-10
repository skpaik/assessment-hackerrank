import "./ListPeople.css";
export default function ListPeople({ contacts }) {
	return (
		<div className="card w-40 mx-10 px-30 py-30">
			<h3 className="pt-10"> Contact List</h3>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Phone Number</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{contacts &&
						contacts.map((contact, i) => (
							<tr data-testid="article" key={i}>
								<td data-testid="article-id">{i + 1}</td>
								<td data-testid="article-title">{contact.name}</td>
								<td data-testid="article-upvotes">{contact.number}</td>
								<td data-testid="article-date">{contact.email}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
