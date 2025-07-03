type GrainedOptions = {
    animate?: boolean;
    patternWidth?: number;
    patternHeight?: number;
    grainOpacity?: number;
    grainDensity?: number;
    grainWidth?: number;
    grainHeight?: number;
    grainChaos?: number;
    grainSpeed?: number;
  };
  
  export function grained(selector: string | HTMLElement, opt: GrainedOptions = {}) {
    const doc = document;
  
    let element: HTMLElement | null = null;
  
    if (typeof selector === 'string') {
      element = doc.getElementById(selector.replace('#', ''));
    } else if (typeof selector === 'object') {
      element = selector;
    }
  
    if (!element) {
      console.error('Grained: cannot find the element with selector or element', selector);
      return;
    }
  
    const elementId = element.id;
    if (!elementId) {
      console.error('Grained: target element must have an `id` attribute.');
      return;
    }
  
    // Set required parent styles
    if (getComputedStyle(element).position !== 'absolute') {
      element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';
  
    const prefixes = ['', '-moz-', '-o-animation-', '-webkit-', '-ms-'];
  
    const options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
      grainChaos: 0.5,
      grainSpeed: 20,
      ...opt,
    };
  
    const generateNoise = (): string => {
      const canvas = doc.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;
  
      for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
          const rgb = Math.floor(Math.random() * 256);
          ctx.fillStyle = `rgba(${rgb},${rgb},${rgb},${options.grainOpacity})`;
          ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
  
      return canvas.toDataURL('image/png');
    };
  
    const addCSSRule = (
      sheet: CSSStyleSheet,
      selector: string,
      rules: string,
      index?: number
    ) => {
      const rule = selector.length ? `${selector} { ${rules} }` : rules;
      if ('insertRule' in sheet) {
        sheet.insertRule(rule, index ?? sheet.cssRules.length);
      } else if ('addRule' in sheet) {
        // @ts-ignore
        sheet.addRule(selector, rules, index);
      }
    };
  
    const noise = generateNoise();
  
    // Add animation keyframes
    const existingAnimStyle = doc.getElementById('grained-animation');
    if (existingAnimStyle) {
      existingAnimStyle.remove();
    }
  
    const keyFrames = [
      '0%:-10%,10%',
      '10%:-25%,0%',
      '20%:-30%,10%',
      '30%:-30%,30%',
      '40%:-20%,20%',
      '50%:-15%,10%',
      '60%:-20%,20%',
      '70%:-5%,20%',
      '80%:-25%,5%',
      '90%:-30%,25%',
      '100%:-10%,10%',
    ];
  
    let animation = '';
  
    for (const prefix of prefixes) {
      animation += `@${prefix}keyframes grained {`;
      for (const frame of keyFrames) {
        const [percent, translate] = frame.split(':');
        animation += `${percent} { ${prefix}transform: translate(${translate}); }`;
      }
      animation += `}`;
    }
  
    const animationStyle = doc.createElement('style');
    animationStyle.type = 'text/css';
    animationStyle.id = 'grained-animation';
    animationStyle.innerHTML = animation;
    doc.body.appendChild(animationStyle);
  
    // Add per-element grain style
    const elementStyleId = `grained-animation-${elementId}`;
    const existingElementStyle = doc.getElementById(elementStyleId);
    if (existingElementStyle) {
      existingElementStyle.remove();
    }
  
    const elementStyle = doc.createElement('style');
    elementStyle.type = 'text/css';
    elementStyle.id = elementStyleId;
    doc.body.appendChild(elementStyle);
  
    let rule = `background-image: url(${noise});`;
    rule += 'position: absolute; content: ""; height: 300%; width: 300%; left: -100%; top: -100%;';
  
    if (options.animate) {
      for (const prefix of prefixes) {
        rule += `${prefix}animation-name: grained; `;
        rule += `${prefix}animation-iteration-count: infinite; `;
        rule += `${prefix}animation-duration: ${options.grainChaos}s; `;
        rule += `${prefix}animation-timing-function: steps(${options.grainSpeed}, end); `;
      }
    }
  
    const pseudoSelector = `#${elementId}::before`;
  
    addCSSRule(elementStyle.sheet as CSSStyleSheet, pseudoSelector, rule);
  }
  