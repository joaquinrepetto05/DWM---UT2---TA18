document.addEventListener('DOMContentLoaded', function() {
    const people = [
        { name: 'Juan Pérez' },
        { name: 'María Gómez' },
        { name: 'Carlos Martínez' },
        { name: 'Ana López' },
        { name: 'Pedro Sánchez' },
        { name: 'Luis Fernández' },
        { name: 'Laura Herrera' },
        { name: 'José García' },
        { name: 'Francisco Morales' },
        { name: 'Elena Navarro' },
        { name: 'Juan Martínez' },
        { name: 'María López' },
        { name: 'Andrés Torres' },
        { name: 'Carla Gutiérrez' },
        { name: 'Alejandro Vargas' },
        { name: 'Sofía Ramírez' },
        { name: 'Fernando Castillo' },
        { name: 'Diego Cruz' },
        { name: 'Lucía Ortega' },
        { name: 'Mario Rivas' },
        { name: 'Isabel Méndez' },
        { name: 'Rafael Ortega' },
        { name: 'Carmen Suárez' },
        { name: 'Luis Romero' },
        { name: 'Laura Martínez' }
      ];
  
    const personList = document.getElementById('personList');
    const searchInput = document.getElementById('searchInput');
  
    function renderList(people) {
      personList.innerHTML = '';
  
      const searchText = searchInput.value.toLowerCase();
      const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchText)
      );
  
      filteredPeople.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person.name;
        personList.appendChild(li);
      });
    }
  
    renderList(people);
  
    searchInput.addEventListener('input', function() {
      renderList(people);
    });
  });  