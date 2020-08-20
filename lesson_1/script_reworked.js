const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach((element) => {
	if (element.length>0 && element.trim() != '')  {
		element = element.toLowerCase().trim();
		element = element[0].toUpperCase() + element.slice(1);
		command.push(element);
	}
})

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash(own) {
	own = own || 0;
	const everyCash = Array.prototype.slice.call(arguments);
	let total = own;
	everyCash[1].forEach((element) => {
		total += +element;
	})
	return total;
}

const lesson = calcCash(null, data.cash);

function makeBusiness(director, teacher, allModule, gang, course) {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);	
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
