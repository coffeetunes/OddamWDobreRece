import React, { useState } from 'react';
import Title from "../../../Common/Title/Title";
import Container from "../../../Common/Container/Container";
import './WhoWeHelpSection.scss';

const WhoWeHelpSection = () => {
    const [category, setCategory] = useState('fundations');
    const [currentPage, setCurrentPage] = useState(1);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCurrentPage(1);
    };

    const getEntries = () => {
        const entries = {
            fundations: [
                [
                    { title: "Fundacja 'Dbam o Zdrowie'", description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" },
                    { title: "Fundacja 'Dla dzieci'", description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
                    { title: "Fundacja 'Bez domu'", description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce" },
                ],
                [
                    { title: "Fundacja 'Lorem Ipsum'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                    { title: "Fundacja 'Lorem Ipsum 2'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                    { title: "Fundacja 'Lorem Ipsum 3'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                ],
                [
                    { title: "Fundacja 'Lorem Ipsum 4'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                    { title: "Fundacja 'Lorem Ipsum 5'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                    { title: "Fundacja 'Lorem Ipsum 6'", description: "Cel i misja: Dolor sit amet.", items: "item1, item2" },
                ]
            ],
            organizations: [
                [
                    { title: "Organizacja 'Lorem Ipsum 1'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                    { title: "Organizacja 'Lorem Ipsum 2'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                    { title: "Organizacja 'Lorem Ipsum 3'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                ],
                [
                    { title: "Organizacja 'Lorem Ipsum 4'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                    { title: "Organizacja 'Lorem Ipsum 5'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                    { title: "Organizacja 'Lorem Ipsum 6'", description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "ut, aliquam, purus, sit, amet" },
                ]
            ],
            collections: [
                [
                    { title: "Zbiórka 'Lorem Ipsum 1'", description: "Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "egestas, sed, tempus" },
                    { title: "Zbiórka 'Lorem Ipsum 2'", description: "Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "egestas, sed, tempus" },
                    { title: "Zbiórka 'Lorem Ipsum 3'", description: "Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "egestas, sed, tempus" },
                ]
            ]
        };

        return entries[category][currentPage - 1];
    };

    const entries = getEntries();
    const totalPages = category === 'fundations' ? 3 : category === 'organizations' ? 2 : 1;

    return (
        <div className="mt-16 mb-24" id="whowehelp">
            <Container>
                <Title>Komu pomagamy?</Title>
                <div className="category-buttons">
                    <button onClick={() => handleCategoryChange('fundations')} className={category === 'fundations' ? 'active' : ''}>Fundacjom</button>
                    <button onClick={() => handleCategoryChange('organizations')} className={category === 'organizations' ? 'active' : ''}>Organizacjom<br/>pozarządowym</button>
                    <button onClick={() => handleCategoryChange('collections')} className={category === 'collections' ? 'active' : ''}>Lokalnym zbiórkom</button>
                </div>
                <p className="category-description">
                    {category === 'fundations' && "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."}
                    {category === 'organizations' && "Lista organizacji pozarządowych, którym możesz pomóc. Sprawdź, czym się zajmują i jakie mają potrzeby."}
                    {category === 'collections' && "Lokalne zbiórki, którym możesz pomóc. Sprawdź, czym się zajmują i jakie mają potrzeby."}
                </p>
                <div className="entries">
                    {entries.map((entry, index) => (
                        <div key={index} className="entry">
                            <div>
                            <div className="entry-title">{entry.title}</div>
                            <div className="entry-description">{entry.description}</div>
                            </div>
                            <div className="entry-items">{entry.items}</div>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default WhoWeHelpSection;
