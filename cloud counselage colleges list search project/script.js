const searchInput = document.getElementById('searchInput');
        const dataTable = document.getElementById('data-table');

        searchInput.addEventListener('keyup', function () {
            const searchValue = searchInput.value.toLowerCase();
            const rows = dataTable.querySelectorAll('tbody tr');

            rows.forEach(row => {
                const dataCells = row.querySelectorAll('td');
                let found = false;

                dataCells.forEach(cell => {
                    if (cell.textContent.toLowerCase().includes(searchValue)) {
                        found = true;
                    }
                });

                if (found) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });