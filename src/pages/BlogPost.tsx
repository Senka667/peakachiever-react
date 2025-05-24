import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  
  // In a real application, you would fetch the blog post data based on the slug
  // For now, we'll use a simple mapping of slugs to content
  const blogPosts = {
    "productivity-hacks": {
      title: "10 Productivity Hacks for Busy Professionals",
      date: "May 15, 2025",
      author: "Alex Johnson",
      content: `
        <h2>Introduction</h2>
        <p>In today's fast-paced world, professionals are constantly seeking ways to maximize their productivity and efficiency. This article presents ten proven productivity hacks that can help busy professionals accomplish more in less time without sacrificing quality or burning out.</p>
        
        <h2>1. Time Blocking</h2>
        <p>Allocate specific blocks of time for different tasks or types of work. This helps maintain focus and prevents the constant context-switching that can drain your mental energy.</p>
        
        <h2>2. The Two-Minute Rule</h2>
        <p>If a task takes less than two minutes to complete, do it immediately rather than scheduling it for later. This prevents small tasks from piling up and becoming overwhelming.</p>
        
        <h2>3. Strategic Email Management</h2>
        <p>Check emails at designated times rather than constantly throughout the day. Consider implementing a system like "inbox zero" to keep your email organized.</p>
        
        <h2>4. Energy Management</h2>
        <p>Identify your peak energy periods and schedule your most demanding tasks during these times. Save routine or less cognitively demanding tasks for when your energy naturally dips.</p>
        
        <h2>5. The Eisenhower Matrix</h2>
        <p>Categorize tasks based on their urgency and importance to prioritize effectively. Focus on important but not urgent tasks to prevent constant firefighting.</p>
      `
    },
    "deep-work-science": {
      title: "The Science of Deep Work",
      date: "May 10, 2025",
      author: "Sarah Williams",
      content: `
        <h2>Understanding Deep Work</h2>
        <p>Deep work, a term coined by Cal Newport, refers to the ability to focus without distraction on a cognitively demanding task. This state of flow allows professionals to produce high-quality work in less time.</p>
        
        <h2>The Neurological Basis</h2>
        <p>Research in neuroscience shows that deep focus activates specific neural networks that enhance problem-solving abilities and creative thinking. When we enter a state of deep work, our brains form stronger connections between different ideas and concepts.</p>
        
        <h2>Building Deep Work Habits</h2>
        <p>Developing the ability to engage in deep work requires practice and intentional habit formation. Start with short periods of focused work and gradually increase the duration as your concentration muscles strengthen.</p>
      `
    },
    "morning-routine": {
      title: "Building a Morning Routine for Success",
      date: "May 5, 2025",
      author: "Michael Chen",
      content: `
        <h2>The Power of Mornings</h2>
        <p>The first hour of your day often sets the tone for everything that follows. By establishing a thoughtful morning routine, you can prime yourself for productivity, creativity, and wellbeing.</p>
        
        <h2>Key Elements of an Effective Morning Routine</h2>
        <p>While everyone's ideal morning routine will differ, research suggests that certain elements are particularly beneficial: hydration, movement, mindfulness, goal-setting, and avoiding digital distractions.</p>
        
        <h2>Customizing Your Routine</h2>
        <p>The most sustainable morning routines are those that align with your personal goals, values, and natural rhythms. Experiment with different activities and timing to discover what works best for you.</p>
      `
    },
    "digital-minimalism": {
      title: "Digital Minimalism: Reclaiming Focus",
      date: "April 28, 2025",
      author: "Emma Rodriguez",
      content: `
        <h2>The Cost of Digital Overload</h2>
        <p>Our constant connectivity comes at a price: fragmented attention, decreased deep thinking abilities, and often, increased anxiety. Digital minimalism offers a philosophy for addressing these challenges.</p>
        
        <h2>Principles of Digital Minimalism</h2>
        <p>Digital minimalism isn't about rejecting technology entirely, but rather being intentional about which technologies you use and how you use them. It involves clarifying your values and using technology as a tool to support those values.</p>
        
        <h2>Practical Steps Toward Digital Minimalism</h2>
        <p>Begin with a digital declutter period, removing optional technologies from your life for 30 days. Then, carefully reintroduce technologies that align with your values and serve a specific purpose in your life.</p>
      `
    },
    "pomodoro-technique": {
      title: "The Pomodoro Technique: Working With Time",
      date: "April 22, 2025",
      author: "David Kim",
      content: `
        <h2>Origins and Principles</h2>
        <p>Developed by Francesco Cirillo in the late 1980s, the Pomodoro Technique is named after the tomato-shaped kitchen timer Cirillo used as a university student. The method breaks work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>
        
        <h2>The Science Behind the Technique</h2>
        <p>The Pomodoro Technique works with our brain's natural attention cycles and helps prevent mental fatigue. The regular breaks prevent the diminishing returns that come from extended focus periods.</p>
        
        <h2>Implementing the Technique</h2>
        <p>To use the Pomodoro Technique effectively, start by selecting a task, setting a timer for 25 minutes, working until the timer rings, and then taking a 5-minute break. After four pomodoros, take a longer break of 15-30 minutes.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts] || {
    title: "Blog Post Not Found",
    date: "",
    author: "",
    content: "<p>The requested blog post could not be found.</p>"
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="text-sm text-gray-600 mb-6">
            {post.date} • By {post.author}
          </div>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  );
}
