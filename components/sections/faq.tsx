import BAccordian from '@/components/features/bAccordian'

export default function FaqSection(props: any) {

    const { classname, align } = props;

    return (
        <section className={classname}>
            <div className="container">
                <div className="row">
                    <div className={"col-lg-6 " + (align == "left" ? "text-" + align : "offset-lg-3")}>
                        <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Any questions?</h2>
                    </div>

                    <div className="clearfix"></div>

                    <div className="col-lg-6">
                        <div className="accordion s2 wow fadeInUp">
                            <div className="accordion-section">
                                <BAccordian
                                    id="accordion-a1"
                                    title="What is game hosting?"
                                    content="Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world."
                                />
                                <div className="accordion-section-title" data-tab="#accordion-a2">
                                    Why do I need game hosting?
                                </div>
                                <div className="accordion-section-content" id="accordion-a2">
                                    <p>Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-a3">
                                    How do I choose a game hosting provider?
                                </div>
                                <div className="accordion-section-content" id="accordion-a3">
                                    <p>Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-a4">
                                    What types of games can I host?
                                </div>
                                <div className="accordion-section-content" id="accordion-a4">
                                    <p>You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the game's requirements.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-a5">
                                    What is server latency or ping?
                                </div>
                                <div className="accordion-section-content" id="accordion-a5">
                                    <p>Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="accordion s2 wow fadeInUp">
                            <div className="accordion-section">
                                <div className="accordion-section-title" data-tab="#accordion-b1">
                                    How do I manage a game server?
                                </div>
                                <div className="accordion-section-content" id="accordion-b1">
                                    <p>Game server management varies depending on the hosting provider and game type. Typically, you'll have access to a control panel or command-line interface to configure settings, mods, and player access.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-b2">
                                    Can I run mods on my game server?
                                </div>
                                <div className="accordion-section-content" id="accordion-b2">
                                    <p>Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-b3">
                                    What is DDoS protection, and do I need it?
                                </div>
                                <div className="accordion-section-content" id="accordion-b3">
                                    <p>DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It's essential for maintaining server stability, especially for popular games.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-b4">
                                    How much does game hosting cost?
                                </div>
                                <div className="accordion-section-content" id="accordion-b4">
                                    <p>Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.</p>
                                </div>
                                <div className="accordion-section-title" data-tab="#accordion-b5">
                                    Is there 24/7 customer support?
                                </div>
                                <div className="accordion-section-content" id="accordion-b5">
                                    <p>Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}