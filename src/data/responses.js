export const getProfileResponse = (profileId, query) => {
  const responses = {
    1: {
      plan: "I've created a personalized development plan for your transition to the Irish marketing sector...",
      skill: "Your strengths include marketing strategy and business development...",
      resource: "Consider the Irish Marketing Association Mentorship Program and Business English course...",
      default: "I'm here to help with your career transition to the Irish marketing sector..."
    },
    2: {
      plan: "I've created a personalized development plan that balances creativity with strategy...",
      skill: "You're strong in content creation; focus on strategy and analytics...",
      resource: "Check out the Digital Content Creator Bootcamp and Dublin meetups...",
      default: "I'm here to help you define a career path blending creativity and growth..."
    },
    3: {
      plan: "I've created a development plan to support your sponsorship goals...",
      skill: "Your technical skills are strong; now focus on portfolio and industry fit...",
      resource: "The Critical Skills Permit Workshop and TechIreland are key...",
      default: "I can help you navigate sponsorship paths and strengthen your profile..."
    }
  };

  if (query.toLowerCase().includes('plan') || query.toLowerCase().includes('development')) {
    return responses[profileId].plan;
  } else if (query.toLowerCase().includes('skill') || query.toLowerCase().includes('gap')) {
    return responses[profileId].skill;
  } else if (query.toLowerCase().includes('resource') || query.toLowerCase().includes('recommend')) {
    return responses[profileId].resource;
  } else {
    return responses[profileId].default;
  }
};