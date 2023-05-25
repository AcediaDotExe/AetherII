# AetherII

## navigation

* main page - logo
* travel with us - list of tours

## footer

* AetherII
* links to blocks on main page
* catalogue of tours

### main page

* about us
* our ship
* ship crew
* our history
* reviews
* link to List of Tours

### tour catalogue

* contains list of tours with button "about", which redirect client to the page of tour

### around Earth

* 3D model of Earth
* title and description
* onboard seats - as well as on airplane
* take place button with form, which send message about passenger in telegram

### to the Moon

* 3D model of Earth
* title and description
* places on board - as well as on airplane
* take place button with form, which send message about passenger in telegram

### observing planets

* 3D model of Earth
* title and description
* places on board - as well as on airplane
* take place button with form, which send message about passenger in telegram

#### global state?

lang, current theme, user token

#### patterns:

* creation Builder - for build client tour object which consist of title of tour, place on the board, astronomic suit,
  client data: (name, surname, contact)
* structural Proxy - for caching 3D models in Session Storage for better loading parameters
* behavior (State pattern - for work with state)
* behavior Observer - mail sending service.

### about us block

ENG:
AetherII is a pioneering company that specializes in organizing unforgettable space tours for adventurers and
enthusiasts. With a commitment to providing extraordinary experiences, AetherII offers exclusive opportunities to
explore the wonders of outer space. Their team of expert astronauts, engineers, and guides ensures the utmost safety and
comfort throughout the entire journey. Whether it's a suborbital joyride or an awe-inspiring orbital expedition,
AetherII crafts personalized itineraries tailored to each individual's desires. Prepare to embark on a
once-in-a-lifetime adventure with AetherII, where dreams of reaching for the stars become a breathtaking reality.

RU:
AetherII — новаторская компания, специализирующаяся на организации незабываемых космических путешествий для искателей
приключений и энтузиастов. Стремясь предоставить невероятные впечатления, AetherII предлагает эксклюзивные возможности
для изучения чудес космического пространства. Их команда опытных космонавтов, инженеров и гидов обеспечивает
максимальную безопасность и комфорт на протяжении всего путешествия. Будь то суборбитальная прогулка или впечатляющая
орбитальная экспедиция, AetherII создает персонализированные маршруты, адаптированные к желаниям каждого человека.
Приготовьтесь отправиться в приключение, которое бывает раз в жизни, вместе с AetherII, где мечты о достижении звезд
станут захватывающей реальностью.

### history block

ENG:
Company: AetherII Year of creation: 2022

Author and his motivation:
Author: Dr. Jonathan Mitchell Motivation: Dr. Jonathan Mitchell, a brilliant aerospace engineer, had always been
captivated by the mysteries and wonders of space. Throughout his career, he had played a crucial role in various space
exploration projects, witnessing the advancements in technology and the growing interest of the public in space tourism.
However, he felt a deep desire to bridge the gap between ordinary individuals and the extraordinary realm of space.
Driven by his passion for exploration and a vision of making space accessible to everyone, he founded AetherII in 2022.

First rocket: Astra I The first project undertaken by AetherII was an active expendable launch system called Astra I.
Inspired by the Greek word for "star," this rocket symbolized the company's ambition to propel humanity toward the
stars. Astra I was designed to deliver payloads into Earth's orbit efficiently and reliably, showcasing AetherII's
commitment to technological innovation and space exploration.

Expansion into space tourism:
After successfully establishing itself as a reliable launch provider, AetherII expanded its horizons to fulfill Dr.
Mitchell's ultimate dream of organizing space tours for people. With the revenue generated from commercial launches, the
company invested in developing its own reusable spaceship and a state-of-the-art space station, named Nova Star and
Celestia Station, respectively.

Clients:
With its advanced infrastructure and a stellar reputation, AetherII quickly became a go-to destination for those seeking
unforgettable experiences beyond Earth's atmosphere. Its roster of clients comprised adventure-seekers, aspiring
astronauts, scientists, and visionaries from all walks of life, united by their shared fascination with the cosmos.
AetherII's space tours offered a unique blend of educational programs, breathtaking views of Earth, and the opportunity
to conduct experiments in microgravity, ensuring an unforgettable journey for each client.

As the years went by, AetherII continued to push the boundaries of space exploration, innovating and expanding its
services to cater to the ever-growing demand for cosmic adventures. Dr. Jonathan Mitchell's vision had become a reality,
enabling humanity to reach for the stars and embrace the wonders of the universe.

RU:
Компания: AetherII Год создания: 2022

Автор и его мотивация: Автор: д-р Джонатан Митчелл Мотивация: д-р Джонатан Митчелл, блестящий аэрокосмический инженер,
всегда был очарован тайнами и чудесами космоса. На протяжении всей своей карьеры он играл решающую роль в различных
проектах по исследованию космоса, наблюдая за развитием технологий и растущим интересом общественности к космическому
туризму. Однако он чувствовал глубокое желание преодолеть разрыв между обычными людьми и необычным царством космоса.
Руководствуясь своей страстью к исследованиям и видением того, как сделать космос доступным для всех, он основал
AetherII в 2022 году.

Первая ракета: Astra I Первым проектом, предпринятым AetherII, была активная одноразовая пусковая система под названием
Astra I. Вдохновленная греческим словом «звезда», эта ракета символизировала стремление компании подтолкнуть
человечество к звездам. Astra I был разработан для эффективной и надежной доставки полезной нагрузки на орбиту Земли,
демонстрируя приверженность AetherII технологическим инновациям и исследованию космоса.

Расширение в космическом туризме: Успешно зарекомендовав себя в качестве надежного провайдера запусков, AetherII
расширила свои горизонты, чтобы осуществить заветную мечту доктора Митчелла об организации космических туров для людей.
На доходы, полученные от коммерческих запусков, компания инвестировала в разработку собственного многоразового
космического корабля и современной космической станции, названных Nova Star и Celestia Station соответственно.

Клиенты: благодаря развитой инфраструктуре и блестящей репутации AetherII быстро стал популярным местом для тех, кто
ищет незабываемые впечатления за пределами земной атмосферы. В список его клиентов входили искатели приключений,
начинающие космонавты, ученые и мечтатели из всех слоев общества, объединенные общим увлечением космосом. Космические
туры AetherII представляли собой уникальное сочетание образовательных программ, захватывающих дух видов Земли и
возможности проводить эксперименты в условиях микрогравитации, гарантируя каждому клиенту незабываемое путешествие.

Шли годы, AetherII продолжал расширять границы исследования космоса, внедряя инновации и расширяя свои услуги, чтобы
удовлетворить постоянно растущий спрос на космические приключения. Видение доктора Джонатана Митчелла стало реальностью,
позволив человечеству достичь звезд и охватить чудеса Вселенной.
