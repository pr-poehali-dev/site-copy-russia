import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Factory" className="text-primary-foreground" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-primary-foreground">Nelden Industry</h1>
                <p className="text-xs text-primary-foreground/80">Россия</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-primary-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('equipment')} className="text-primary-foreground hover:text-primary transition-colors font-medium">
                Оборудование
              </button>
              <button onClick={() => scrollToSection('service')} className="text-primary-foreground hover:text-primary transition-colors font-medium">
                Сервис
              </button>
              <button onClick={() => scrollToSection('about')} className="text-primary-foreground hover:text-primary transition-colors font-medium">
                О компании
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-primary-foreground hover:text-primary transition-colors font-medium">
                Проекты
              </button>
              <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
                Контакты
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-primary-foreground">
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-primary-foreground hover:text-primary transition-colors font-medium py-2">
                Главная
              </button>
              <button onClick={() => scrollToSection('equipment')} className="block w-full text-left text-primary-foreground hover:text-primary transition-colors font-medium py-2">
                Оборудование
              </button>
              <button onClick={() => scrollToSection('service')} className="block w-full text-left text-primary-foreground hover:text-primary transition-colors font-medium py-2">
                Сервис
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-primary-foreground hover:text-primary transition-colors font-medium py-2">
                О компании
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-primary-foreground hover:text-primary transition-colors font-medium py-2">
                Проекты
              </button>
              <Button onClick={() => scrollToSection('contacts')} className="w-full bg-accent hover:bg-accent/90">
                Контакты
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/44447337-2f14-402a-b51a-8699d48bca9a/files/088be5ed-6cec-4729-969b-f8b827c129ca.jpg" 
              alt="Industrial equipment" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl animate-slide-up">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
                Промышленное оборудование нового поколения
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Официальный представитель Nelden Industry в России. Полный спектр услуг: поставка, установка, сервисное обслуживание.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection('equipment')}>
                  <Icon name="Settings" className="mr-2" size={20} />
                  Каталог оборудования
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading text-2xl">25+ лет опыта</CardTitle>
                  <CardDescription className="text-base">
                    Международный опыт в производстве и обслуживании промышленного оборудования
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Wrench" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading text-2xl">Сервис 24/7</CardTitle>
                  <CardDescription className="text-base">
                    Круглосуточная техническая поддержка и выездное обслуживание по всей России
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Shield" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading text-2xl">Гарантия качества</CardTitle>
                  <CardDescription className="text-base">
                    Официальная гарантия производителя и полная сертификация оборудования
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="equipment" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Каталог оборудования</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Широкий ассортимент промышленного оборудования для различных отраслей производства
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Металлообрабатывающие станки',
                  description: 'ЧПУ станки, токарные, фрезерные центры высокой точности',
                  icon: 'Cog',
                  features: ['Точность до 0.001 мм', 'Автоматизация', 'Высокая производительность']
                },
                {
                  title: 'Прессовое оборудование',
                  description: 'Гидравлические и механические прессы для штамповки',
                  icon: 'Factory',
                  features: ['До 5000 тонн', 'Энергоэффективность', 'Безопасность']
                },
                {
                  title: 'Сварочное оборудование',
                  description: 'Роботизированные сварочные комплексы и станции',
                  icon: 'Zap',
                  features: ['Роботизация', 'Точность швов', 'Многофункциональность']
                },
                {
                  title: 'Промышленные печи',
                  description: 'Термическое оборудование для обработки металлов',
                  icon: 'Flame',
                  features: ['До 1500°C', 'Равномерный нагрев', 'Экономичность']
                },
                {
                  title: 'Конвейерные системы',
                  description: 'Автоматизированные линии транспортировки и сборки',
                  icon: 'Truck',
                  features: ['Модульность', 'Гибкость настройки', 'Надёжность']
                },
                {
                  title: 'Контрольно-измерительное оборудование',
                  description: 'Системы контроля качества и измерительные комплексы',
                  icon: 'ScanLine',
                  features: ['Высокая точность', 'Цифровизация', 'Автоматический контроль']
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} className="text-accent" size={28} />
                    </div>
                    <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Icon name="Check" className="text-primary mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contacts')}>
                      Запросить информацию
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Сервис и обслуживание</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Наш приоритет — бесперебойная работа вашего производства. Мы предоставляем комплексные услуги технической поддержки.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: 'Phone',
                      title: 'Техническая поддержка 24/7',
                      description: 'Горячая линия технической поддержки работает круглосуточно. Консультации по телефону и удалённая диагностика.'
                    },
                    {
                      icon: 'Truck',
                      title: 'Выездное обслуживание',
                      description: 'Сервисные инженеры выезжают по всей России. Средний срок прибытия — 24 часа в крупных городах.'
                    },
                    {
                      icon: 'Package',
                      title: 'Склад запчастей',
                      description: 'Собственный склад оригинальных запчастей в России. Быстрая отправка в любой регион страны.'
                    },
                    {
                      icon: 'Settings',
                      title: 'Плановое обслуживание',
                      description: 'Регулярное техническое обслуживание по графику. Предотвращаем поломки и продлеваем срок службы оборудования.'
                    },
                    {
                      icon: 'GraduationCap',
                      title: 'Обучение персонала',
                      description: 'Программы обучения операторов и технического персонала. Сертификаты установленного образца.'
                    },
                    {
                      icon: 'FileText',
                      title: 'Гарантийное обслуживание',
                      description: 'Полная гарантия производителя. Бесплатное устранение дефектов в течение гарантийного срока.'
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={service.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/44447337-2f14-402a-b51a-8699d48bca9a/files/8cf2a5a4-3d29-43ea-b5f7-302b6d1b3790.jpg" 
                  alt="Service" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-heading font-bold">24/7</div>
                  <div className="text-sm font-medium">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">О компании Nelden Industry</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nelden Industry — итальянская компания с более чем 25-летней историей производства промышленного оборудования. 
                Мы являемся официальным представителем бренда в России с 2018 года.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">реализованных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">клиентов в России</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">техподдержка</div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-center">Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Target" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Надёжность</h3>
                    <p className="text-muted-foreground text-sm">
                      Качество оборудования и сервиса — основа долгосрочных отношений с клиентами
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Lightbulb" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Инновации</h3>
                    <p className="text-muted-foreground text-sm">
                      Постоянное развитие технологий для повышения эффективности производства
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Партнёрство</h3>
                    <p className="text-muted-foreground text-sm">
                      Индивидуальный подход и долгосрочное сотрудничество с каждым клиентом
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Реализованные проекты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Примеры успешных внедрений нашего оборудования на российских предприятиях
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Автомобильный завод',
                  location: 'Калуга',
                  description: 'Комплексное оснащение цеха металлообработки. 15 станков с ЧПУ и роботизированная линия сварки.',
                  year: '2023'
                },
                {
                  title: 'Металлургический комбинат',
                  location: 'Челябинск',
                  description: 'Модернизация прессового производства. Установка 4 гидравлических прессов мощностью до 3000 тонн.',
                  year: '2023'
                },
                {
                  title: 'Авиастроительное предприятие',
                  location: 'Казань',
                  description: 'Поставка высокоточного измерительного оборудования и координатно-измерительных машин.',
                  year: '2022'
                },
                {
                  title: 'Производство бытовой техники',
                  location: 'Липецк',
                  description: 'Автоматизированная конвейерная линия сборки с системой контроля качества.',
                  year: '2022'
                },
                {
                  title: 'Судостроительный завод',
                  location: 'Санкт-Петербург',
                  description: 'Специализированное сварочное оборудование для корпусных работ и трубопроводов.',
                  year: '2021'
                },
                {
                  title: 'Энергомашиностроение',
                  location: 'Екатеринбург',
                  description: 'Токарно-фрезерные центры для производства крупногабаритных деталей турбин.',
                  year: '2021'
                }
              ].map((project, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/44447337-2f14-402a-b51a-8699d48bca9a/files/cfd0ff44-b749-442c-98c8-aa0054d8bebb.jpg" 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Icon name="MapPin" className="mr-1" size={14} />
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Готовы обсудить ваш проект? Заполните форму, и наш менеджер свяжется с вами в ближайшее время
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">Телефон</CardTitle>
                    <CardDescription className="text-base">
                      +7 (495) 123-45-67<br />
                      Ежедневно, 24/7
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">Email</CardTitle>
                    <CardDescription className="text-base">
                      info@nelden.ru<br />
                      service@nelden.ru
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">Офис в Москве</CardTitle>
                    <CardDescription className="text-base">
                      Пресненская набережная, 12<br />
                      Москва-Сити, Башня Федерация
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">Режим работы</CardTitle>
                    <CardDescription className="text-base">
                      Пн-Пт: 9:00 - 18:00<br />
                      Тех. поддержка: 24/7
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Отправить запрос</CardTitle>
                  <CardDescription className="text-base">
                    Заполните форму, и мы свяжемся с вами в течение рабочего дня
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                        <Input placeholder="Иван Иванов" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Компания</label>
                        <Input placeholder="ООО «Название»" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон *</label>
                        <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="email@example.com" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Тип оборудования</label>
                      <Input placeholder="Например: станки с ЧПУ" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение *</label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте: какое оборудование вас интересует, требуемые характеристики, сроки..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить запрос
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Factory" className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Nelden Industry</h3>
                  <p className="text-xs text-secondary-foreground/80">Россия</p>
                </div>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Официальный представитель итальянского производителя промышленного оборудования
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('equipment')} className="hover:text-primary transition-colors">Оборудование</button></li>
                <li><button onClick={() => scrollToSection('service')} className="hover:text-primary transition-colors">Сервис</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@nelden.ru
                </li>
                <li className="flex items-start">
                  <Icon name="MapPin" size={16} className="mr-2 mt-1" />
                  Москва-Сити, Башня Федерация
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Офис: Пн-Пт, 9:00-18:00</li>
                <li>Тех. поддержка: 24/7</li>
                <li className="pt-4">
                  <Button variant="outline" size="sm" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollToSection('contacts')}>
                    Связаться
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-secondary-foreground/20" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>© 2024 Nelden Industry Russia. Все права защищены.</p>
            <p className="mt-2 md:mt-0">Сделано на poehali.dev</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
