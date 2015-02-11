<div class='name'><%= model.escape("name") %></div>
<div class='email'><%= model.escape("email") %></div>
<div class='phone'><%= model.escape("phone") %></div>
<div class='delete'><button class='delete-btn' model-id='delete<%= model.escape("id") %>'>Remove</button></div>