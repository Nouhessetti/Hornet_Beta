import React from 'react';
import './About.css';

import {AiOutlineSolution} from "react-icons/ai";
import { MdOutlineAssessment } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineTempleBuddhist } from "react-icons/md";

export default function About () {
    return(
        <div className='about--hornet'>
            <h1> What is Hornet univercity?  </h1>
          <div className='container--about'>
                <div className='courses'>
                <AiOutlineVideoCamera className='icon--hornet' />
                <h3>High-Quality Videos</h3>
                <p>These are instructional videos created with a
                   focus on clarity, accuracy, and engagement. High-quality videos often feature professional production values,
                   clear audio, and visuals that aid understanding.</p>
                  
                </div>
                <div className='courses exercices'>
                <AiOutlineSolution className='icon--hornet' />
                <h3>Exercises with Solutions</h3>
                <p>These are interactive learning
                   activities designed to reinforce concepts covered in the videos. Exercises can come in various formats, including quizzes, problem-solving tasks,  depending on the subject matter..</p>
                
                </div>
                <div className='courses training'>
                <MdOutlineAssessment className='icon--hornet' />
                <h3>100+ Hours Of Video Explanations</h3>
                <p>Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.
                      Learn more.</p>
                </div>
                <div className='courses realprobles'>
                <MdOutlineTempleBuddhist className='icon--hornet' />
                <h3>100+ Hours Of Video Explanations</h3>
                <p>Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.
                      Learn more.</p>
                </div>

                <div className='courses realprobles'>
                <MdOutlineTempleBuddhist className='icon--hornet' />
                <h3>4 Curated Assessments</h3>
                <p>Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.
                      Learn more.</p>
                </div>
          </div>
          
        </div>
    );
}