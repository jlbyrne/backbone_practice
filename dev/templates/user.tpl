<div class='info'>
	<div class='name'><strong>Name:</strong> <%= model.escape("name") %></div>
	<div class='email'><strong>Email:</strong> <%= model.escape("email") %></div>
	<div class='phone'><strong>Phone:</strong> <%= model.escape("phone") %></div>
</div>
<button class='delete-btn' model-id='delete<%= model.escape("id") %>'>Remove</button>
<div class='clear'></div>