'use client';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from 'react-icons/io5';

const Education = () => {
    return (
        <section>
            <h2 className='text-center text-2xl font-bold py-3'>Education Qualification</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<IoSchoolSharp />}
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022 - Present"
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">Varendra University</h3>
                    <address className="vertical-timeline-element-subtitle">Rajshahi Bypass Road, Chandrima, Paba, Rajshahi-6204</address>
                    <h4 className="vertical-timeline-element-degree font-bold">BSc in CSE</h4>
                    <p>
                        Pursuing B.Sc. in Computer Science & Engineering with a focus on software development, problem-solving, and cutting-edge technologies. Gaining hands-on experience in programming, database management, web development, and data structures. Actively involved in academic projects and eager to contribute to innovative solutions in the tech industry.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2017 - August 2021"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchoolSharp />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">Rajshahi Polytechnic Institute</h3>
                    <address className="vertical-timeline-element-subtitle">Sopura, Chandrima, Rajshahi, Bangladesh</address>
                    <h4 className="vertical-timeline-element-degree font-bold">Diploma in Computer Technology </h4>
                    <p>
                        Completed a comprehensive diploma program covering computer hardware, software, and networking. Gained practical experience through hands-on projects, technical training, and foundational skills in programming and hardware knowledge. This program provided a strong base for further studies in computer science.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="January 2012 - February 2017"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoSchoolSharp />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">Kaligram Dodangi High School</h3>
                    <address className="vertical-timeline-element-subtitle">Manda, Naogaon, Rajshahi, Bangladesh</address>
                    <h4 className="vertical-timeline-element-degree font-bold">Science </h4>
                    <p>
                        Completed high school education from Kaligram Dodangi High School with a strong focus on the Science discipline, laying the groundwork for future academic and technical pursuits.
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>

        </section>
    );
};

export default Education;