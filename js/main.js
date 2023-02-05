//terraform
let button1 = document.querySelector('.title_1');
let button2 = document.querySelector('.title_2');

let p1 = document.querySelector('.teamcity_text_p');
let p2 = document.querySelector('.teamcity_text_p');
let classTitle1 = document.querySelector('.title_1');
let classTitle2 = document.querySelector('.title_2');


button1.addEventListener('click', () => {
    p1.innerHTML = `<ul>
    <li>понимание для чего нужны pipeline'ы и как они выглядят</li>
    <li>понимание как должен выглядеть хороший пайлайн</li>
</ul>`;
classTitle2.classList.remove('title_active');
    classTitle1.classList.add('title_active');
    
}
)
button2.addEventListener('click', () => {
    p2.innerHTML = 
    `<ul>
    <li>умение работать с какой-либо CI/CD системой</li>
    <li>писать пайплайны</li>
    </ul>`
    classTitle1.classList.remove('title_active');
    classTitle2.classList.add('title_active');
}
)
//rabbitmq
let button3 = document.querySelector('.title_3');
let button4 = document.querySelector('.title_4');

let p3 = document.querySelector('.rabbitmq_text_p');
let p4 = document.querySelector('.rabbitmq_text_p');
let classTitle3 = document.querySelector('.title_3');
let classTitle4 = document.querySelector('.title_4');

button3.addEventListener('click', () => {
    p3.innerHTML = `<ul>
    <li>Exchanges</li> 
    <li>Queues</li> 
    <li>Bindings</li> 
    <li>Как происходит миграция схемы</li>
    <li>Как настраивается отказоустойчивость в кластере</li>
</ul>`;
classTitle4.classList.remove('title_active');
    classTitle3.classList.add('title_active');
    
}
)
button4.addEventListener('click', () => {
    p4.innerHTML = 
    `<ul>
    <li>Посмотреть состоние кластера</li> 
    <li>Посмотреть в какой очереди накопились сообщения
    </li> 
    <li>Прочитать сообщение из очереди</li> 
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
</ul>`
    classTitle3.classList.remove('title_active');
    classTitle4.classList.add('title_active');
}
)
//graylog
let button5 = document.querySelector('.title_5');
let button6 = document.querySelector('.title_6');

let p5 = document.querySelector('.graylog_text_p');
let p6 = document.querySelector('.graylog_text_p');
let classTitle5 = document.querySelector('.title_5');
let classTitle6 = document.querySelector('.title_6');

button5.addEventListener('click', () => {
    p5.innerHTML = `<ul>
    <li>input</li>
    <li>index</li>
    <li>stream</li>
    <li>alerts</li>
    <li>graylog query language basic</li>
    <li>архитектуру</li>
</ul>`;
classTitle6.classList.remove('title_active');
    classTitle5.classList.add('title_active');
    
}
)
button6.addEventListener('click', () => {
    p6.innerHTML = 
    `<ul>
    <li>Писать запросы (смотреть логи приложений)</li> 
    <li>Настраивать сбор логов с новых кластеров</li> 
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>

</ul>`
    classTitle5.classList.remove('title_active');
    classTitle6.classList.add('title_active');
}
)

//postgres
let button7 = document.querySelector('.title_7');
let button8 = document.querySelector('.title_8');
let button9 = document.querySelector('.title_9');


let p7 = document.querySelector('.postgres_text_p');
let p8 = document.querySelector('.postgres_text_p');
let p9 = document.querySelector('.postgres_text_p');

let classTitle7 = document.querySelector('.title_7');
let classTitle8 = document.querySelector('.title_8');
let classTitle9 = document.querySelector('.title_9');


button7.addEventListener('click', () => {
    p7.innerHTML = `<ul>
    <li>WAL-логи (что такое, зачем нужны, WAL-levels)</li>
    <li>Схемы (что такое, зачем нужны)</li>
    <li>Основы SQL (базовы запросы SELECT\INSERT\UPDATE\DELETE + понимание ORDER\LIMIT и JOIN в базовом виде (на простых примерах))</li>
    <li>Репликация (как работает, как смотреть отставание, что такое replication slots)</li>
    <li>Фоновые процессы (autovacuum, checkpoint, bgwriter)</li>
    <li>Базовое понимание индексов (что такое, зачем нужны, как смотреть)</li>
    <li>Базовое понимание транзакций</li>
    <li>Как работают миграции схем в БД</li>
    <li>Знать для чего нужен pg_stat_statements и что там можно увидеть</li>
    <li>Понимать все, что есть в мониторинге</li>
    <li>Как снимаются бекапы (хорошо расписано в документации barman https://docs.pgbarman.org/release/2.18/ )</li>
    <li>Миграции схемы БД (pgmigrate)</li>
</ul>`;
classTitle9.classList.remove('title_active');
classTitle8.classList.remove('title_active');
    classTitle7.classList.add('title_active');
    
}
)
button8.addEventListener('click', () => {
    p8.innerHTML = 
    `<ul>
    <li>Развернуть (при помощи ansible, но руками тоже нужно уметь)</li> 
    <li>Настроить pg_hba.conf</li> 
    <li>Развернуть реплику</li>
    <li>Смотреть базы/пользователей/схемы/гранты</li>
    <li>Смотреть подключения к БД (например, посмотреть сколько подключений к определнной БД определенным пользователем; посмотреть запросы\зависшие запросы)</li>
    <li>Убить запрос пользователя</li>
    <li>Выполнить запрос в БД</li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>
    <li style="color:#fff";></li>




</ul>`
    classTitle9.classList.remove('title_active');
    classTitle7.classList.remove('title_active');

    classTitle8.classList.add('title_active');
}
)
button9.addEventListener('click', () => {
    p9.innerHTML = 
    `<h3 class="kubernetes_title">руссифицированная официальная документация</h3>
    <button class="link"><a target="_blank" href="https://postgrespro.ru/docs/postgresql/14/">Пeрейти</a></button>

    `
    classTitle8.classList.remove('title_active');
    classTitle7.classList.remove('title_active');

    classTitle9.classList.add('title_active');
}
)
//git
let button10 = document.querySelector('.title_10');
let button11 = document.querySelector('.title_11');

let p10 = document.querySelector('.git_text_p');
let p11 = document.querySelector('.git_text_p');
let classTitle10 = document.querySelector('.title_10');
let classTitle11 = document.querySelector('.title_11');

button11.addEventListener('click', () => {
    p11.innerHTML =  
    `<h3 class="kubernetes_title">шикарный тренажер по всем базовым командам</h3>
    <button class="link"><a target="_blank" href="https://learngitbranching.js.org/?locale=ru_RU">Перейти</a></button>`
    classTitle10.classList.remove('title_active');
    classTitle11.classList.add('title_active');
    
}
)
button10.addEventListener('click', () => {
    p10.innerHTML = 
    `in progress
    `
    classTitle11.classList.remove('title_active');
    classTitle10.classList.add('title_active');
}
)
//linux
let button12 = document.querySelector('.title_12');
let button13 = document.querySelector('.title_13');
let button14 = document.querySelector('.title_14');


let p12 = document.querySelector('.linux_text_p');
let p13 = document.querySelector('.linux_text_p');
let p14 = document.querySelector('.linux_text_p');
let classTitle12 = document.querySelector('.title_12');
let classTitle13 = document.querySelector('.title_13');
let classTitle14 = document.querySelector('.title_14');


button12.addEventListener('click', () => {
    p12.innerHTML =  `<h3 class="kubernetes_title">Linux для чайников</h3>
    <button class="link"><a target="_blank" href="https://avidreaders.ru/book/linux-dlya-chaynikov.html">Скачать</a></button>`
    classTitle13.classList.remove('title_active');
    classTitle14.classList.remove('title_active');
    classTitle12.classList.add('title_active');
    
}
)
button13.addEventListener('click', () => {
    p13.innerHTML =  `<h3 class="kubernetes_title">Основы Linux</h3>
    <button class="link"><a target="_blank" href="https://www.youtube.com/playlist?list=PL0lO_mIqDDFUwVWvVitxG2oXA6a-Nq-Qq">Скачать</a></button>`
    classTitle14.classList.remove('title_active');
    classTitle12.classList.remove('title_active');
    classTitle13.classList.add('title_active');
}
)
button14.addEventListener('click', () => {
    p14.innerHTML =  `<h3 class="kubernetes_title">LPIC-1 (exam 101)</h3>
    <button class="link"><a target="_blank" href="https://www.youtube.com/playlist?list=PLmxB7JSpraiep6kr802UDqiAIU-76nGfc">Скачать</a></button>`
    classTitle13.classList.remove('title_active');
    classTitle12.classList.remove('title_active');
    classTitle14.classList.add('title_active');
}
)
//python
let button15 = document.querySelector('.title_15');
let button16 = document.querySelector('.title_16');
let button17 = document.querySelector('.title_17');


let p15 = document.querySelector('.python_text_p');
let p16 = document.querySelector('.python_text_p');
let p17 = document.querySelector('.python_text_p');
let classTitle15 = document.querySelector('.title_15');
let classTitle16 = document.querySelector('.title_16');
let classTitle17 = document.querySelector('.title_17');


button15.addEventListener('click', () => {
    p15.innerHTML =  `<h3 class="kubernetes_title">Stepik курс для начинающих</h3>
    <button class="link"><a target="_blank" href="https://stepik.org/course/58852/promo">Перейти</a></button>`
    classTitle16.classList.remove('title_active');
    classTitle17.classList.remove('title_active');
    classTitle15.classList.add('title_active');
    
}
)
button16.addEventListener('click', () => {
    console.log('lll')

    p16.innerHTML =  `<h3 class="kubernetes_title">Stepik курс для продвинутых</h3>
    <button class="link"><a target="_blank" href="https://stepik.org/course/68343/promo">Перейти</a></button>`

    classTitle17.classList.remove('title_active');
    classTitle15.classList.remove('title_active');
    classTitle16.classList.add('title_active');
}
)
button17.addEventListener('click', () => {
    p17.innerHTML =  `<h3 class="kubernetes_title">Dive into Python</h3>
    <button class="link"><a target="_blank" href="https://soft.sibnet.ru/soft/19208-dive-into-python-3">Скачать</a></button>`
    classTitle16.classList.remove('title_active');
    classTitle15.classList.remove('title_active');
    classTitle17.classList.add('title_active');
}
)
//Kubernetes
let button18 = document.querySelector('.title_18');
let button19 = document.querySelector('.title_19');
let button20 = document.querySelector('.title_20');


let p18 = document.querySelector('.kubernetes_text_p');
let p19 = document.querySelector('.kubernetes_text_p');
let p20 = document.querySelector('.kubernetes_text_p');
let classTitle18 = document.querySelector('.title_18');
let classTitle19 = document.querySelector('.title_19');
let classTitle20 = document.querySelector('.title_20');


button18.addEventListener('click', () => {
    p18.innerHTML =  `<h3 class="kubernetes_title">Базовые абстракции на пальцах</h3>
    <button class="link"><a class="link" target="_blank" href="https://bool.dev/blog/detail/chto-takoe-pods-nodes-containers-i-clusters-v-kubernetes">Читать</a></button>`
    classTitle19.classList.remove('title_active');
    classTitle20.classList.remove('title_active');
    classTitle18.classList.add('title_active');
    
}
)
button19.addEventListener('click', () => {

    p19.innerHTML =  `<h3 class="kubernetes_title">Официальная документация</h3>
    <button class="link"><a target="_blank" href="https://kubernetes.io/ru/docs/concepts/">Перейти</a></button>`

    classTitle18.classList.remove('title_active');
    classTitle20.classList.remove('title_active');
    classTitle19.classList.add('title_active');
}
)
button20.addEventListener('click', () => {
    p20.innerHTML =  `<h3 class="kubernetes_title">Годный курс от Slurm</h3>
    <button class="link"><a target="_blank" href="https://www.youtube.com/playlist?list=PL8D2P0ruohOA4Y9LQoTttfSgsRwUGWpu6">Learn More ></a></button>`
    classTitle18.classList.remove('title_active');
    classTitle19.classList.remove('title_active');
    classTitle20.classList.add('title_active');
}
)