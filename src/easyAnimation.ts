// utils/easyAnimation.ts

export type AnimationCallback = () => void;

export class AnimationQueue {
    private queue: AnimationCallback[] = [];
    private isRunning: boolean = false;

    enqueue(callback: AnimationCallback) {
        this.queue.push(callback);
        this.runNext();
    }

    public runNext() {
        if (this.isRunning || this.queue.length === 0) return;

        this.isRunning = true;
        const next = this.queue.shift();
        if (next) {
            next();
        }
    }

    complete() {
        this.isRunning = false;
        this.runNext();
    }
}

// 애니메이션 함수들...

export function fadeIn(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.opacity = '1';
        if (callback) callback(); // 콜백 함수 호출
    }, 0);
}

export function fadeOut(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms`;

    setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback(); // 콜백 함수 호출
        }, duration);
    }, 0);
}

// 슬라이드 애니메이션 함수들...

export function slideIn(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = `transform ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.transform = 'translateX(0)';
        if (callback) callback(); // 콜백 함수 호출
    }, 0);
}

export function slideOut(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'translateX(0)';
    element.style.transition = `transform ${duration}ms`;

    setTimeout(() => {
        element.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback(); // 콜백 함수 호출
        }, duration);
    }, 0);
}

// 확대/축소 애니메이션 함수들...

export function zoomIn(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'scale(0)';
    element.style.transition = `transform ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.transform = 'scale(1)';
        if (callback) callback(); // 콜백 함수 호출
    }, 0);
}

export function zoomOut(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'scale(1)';
    element.style.transition = `transform ${duration}ms`;

    setTimeout(() => {
        element.style.transform = 'scale(0)';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback(); // 콜백 함수 호출
        }, duration);
    }, 0);
}

// 애니메이션 큐를 사용할 수 있는 함수
export function queueAnimation(queue: AnimationQueue, animation: (element: HTMLElement, duration?: number, callback?: () => void) => void, element: HTMLElement, duration: number, callback?: () => void) {
    queue.enqueue(() => animation(element, duration, () => {
        queue.complete(); // 애니메이션이 완료되면 큐에서 다음 애니메이션 실행
        if (callback) callback(); // 추가 콜백 호출
    }));
}

// 회전 애니메이션
export function rotateIn(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'rotate(-180deg)';
    element.style.transition = `transform ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
        if (callback) callback(); // 콜백 함수 호출
    }, 0);
}

export function rotateOut(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'rotate(0deg)';
    element.style.transition = `transform ${duration}ms`;

    setTimeout(() => {
        element.style.transform = 'rotate(-180deg)';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback(); // 콜백 함수 호출
        }, duration);
    }, 0);
}

// 스케일 확대 애니메이션
export function scaleUp(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'scale(0)';
    element.style.transition = `transform ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.transform = 'scale(1)';
        if (callback) callback(); // 콜백 함수 호출
    }, 0);
}

// 스케일 축소 애니메이션
export function scaleDown(element: HTMLElement, duration: number = 500, callback?: () => void): void {
    element.style.transform = 'scale(1)';
    element.style.transition = `transform ${duration}ms`;

    setTimeout(() => {
        element.style.transform = 'scale(0)';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback(); // 콜백 함수 호출
        }, duration);
    }, 0);
}