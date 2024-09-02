// Fonction pour suivre le prix total
function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.card').forEach(item => {
      const unitPrice = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      totalPrice += unitPrice * quantity;
    });
    document.querySelector('.total').textContent = totalPrice + ' $';
  }
  
  // Event listeners pour les icones plus et minus 
  document.querySelectorAll('.fa-plus-circle').forEach(btn => {
    btn.addEventListener('click', () => {
      const quantitySpan = btn.nextElementSibling;
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotalPrice();
    });
  });
  
  document.querySelectorAll('.fa-minus-circle').forEach(btn => {
    btn.addEventListener('click', () => {
      const quantitySpan = btn.previousElementSibling;
      if (quantitySpan.textContent > 0) {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
        updateTotalPrice();
      }
    });
  });
  
  // Event listeners pour les boutons supprimes
document.querySelectorAll('.fa-trash-alt').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.card-body').remove();
      updateTotalPrice();
    });
  });
  
  // Event listeners pour le bouton "J'aime"
  document.querySelectorAll('.fa-heart').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
    });
  });